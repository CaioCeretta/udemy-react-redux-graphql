import { AdditionalInformation, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from '@/src/utils/firebase/firebase.utils';
import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { EmailSignInStart, SignUpStart, SignUpSuccess, signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed, signUpSuccess } from './user.action';
import { USER_ACTION_TYPES } from './user.types';

import { User } from 'firebase/auth';

/* The /macro will allow us to leverage that babel-plugin-macros that we installed, what it does is essentially, is that
when we use third party libraries, or builders of those, in order to add additional steps to those during the code trans
formation or the compilation step, is that they have to create something like a babel plugin that we need to install.
This plugin is going to be unique to their library so that the code compiles the way that they want in order to interact
with the babble step, however, babbel has defined a very clear step on how to actually create this type of tool inside
of babbel.

So it's like we could see it as a standard interface for libraries to use, so that's why we install the babo plugin macro.
But using this library, if a third party lib, utilize the interface that is created by that plugin, it makes that we don't
have to install any babbel additional plugins, so the typed-redux-saga integrated with it.

What it mainly does is that it simplifies the final output of the actions that get by created by the effects.

*/


/*
import { USER_ACTION_TYPES } from './user.types';

import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed, signUpSuccess } from './user.action';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  /* Every single step that yields, we must look for being the most descriptive as possible, and in this
  case it means creating an effect for, which is essentially a plain object that describes what's going to happen, and
  here with call it just say: 'Hey, i got some object where the function name will be createUserDocumentFromAuth and
  and the parameters are whatever is passed afterwards
    
  */
export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);

    if (!userAuth) {
      return
    }

    yield* call(getSnapshotFromUserAuth, userAuth)

  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {

  try {
    const { userCredential } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    if(userCredential) {
      const { user } = userCredential

      yield call(getSnapshotFromUserAuth, user);
    }
    
  } catch (error) {
    yield put(signInFailed(error as Error));
  }
}


export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if(userCredential) {
    const {user} = userCredential
    yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* signInAfterSignUp({ payload: { user, additionalDetails } }: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* signOut() {
  try {
    yield* call(signOutUser)
    yield* put(signOutSuccess())
  } catch (error) {
    yield* put(signOutFailed(error as Error))
  }
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart)
  ])
}