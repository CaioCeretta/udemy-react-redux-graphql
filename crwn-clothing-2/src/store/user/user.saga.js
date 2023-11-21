import { takeLatest, put, all, call } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './user.types'

import { signInSuccess, signInFailed } from './user.action'

import { createUserDocumentFromAuth, getCurrentUser } from '../../utils/firebase.utils'

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

    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(signInFailed(error))
  }

}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if(!userAuth) return;

    yield call(getSnapshopFromUserAuth, userAuth)

  } catch (error) {

  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}



export function* userSaga() {
  yield all([call(onCheckUserSession)])
}