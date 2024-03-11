import { all, call } from 'typed-redux-saga/macro'
import { userSaga } from './user/user.saga'
import { categoriesSaga } from './categories/category.saga'

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSaga)])
}
