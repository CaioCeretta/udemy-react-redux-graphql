import { takeLatest, put, all, call, take } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './user.types'

import { signInSuccess, signInFailed, signUpSuccess, signUpFailed } from './user.action'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase.utils'

export function* getSnapshopFromUserAuth(userAuth, additionalDetails) {
  try {
    /* Every single step that yields, we must look for being the most descriptive as possible, and in this
    case it means creating an effect for, which is essentially a plain object that describes what's going to happen, and
    here with call it just say: 'Hey, i got some object where the function name will be createUserDocumentFromAuth and
    and the parameters are whatever is passed afterwards
      
    */
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailed(error))
  }

}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup)
    yield call(getSnapshopFromUserAuth, user);

  } catch (error) {

    yield put(signInFailed)
  }

}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield call(getSnapshopFromUserAuth, user)

  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {


  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    console.log(user)


    yield put(signUpSuccess(user, {displayName}))

  } catch (e) {
    yield put(signUpFailed(e))
  }
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}


export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshopFromUserAuth, user, additionalDetails)
}




export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return;

    yield call(getSnapshopFromUserAuth, userAuth)

  } catch (error) {

  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}



export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ])
}