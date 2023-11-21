/**
 * Saga has redux bindings on it, meaning that we are able to access the redux store, dispatch to it, and we do so
 * throught these methods
 * */

import { takeLatest, all, call, put } from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { fetchCategoriesFailed, fetchCategoriesSuccess } from "./categories.action";

// export const fetchCategoriesAsync = () => async dispatch => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments('categories')
//     dispatch(fetchCategoriesSuccess(categoriesArray))
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error))
//   }
 

// }

/**
 * Generator responds to our actions in the same form as a reducer switch, switch says to us that whenever it "hears"
 * this action, it's going to return something
 * With saga is similar, when an action happens and i "hear it", i want to do something with it 
 * 
 * on the redux thunk, when we handled async functions, before, our async was the thing that actually fired off the
 * action, but now instead of it, we are responding to categoriesStart, this is why we don't need to use it in this case
 * And here what we are goiung to do is to say: "Hey, i want to yield and i want to call, take latest. Take is where we
 * receive actions, takeLatest means that whenever we hear a bunch of the same action, give me the latest one, and the
 * previous ones that were heard and fired the same action multiple times, before the generator finishes, in this case we
 * are going to use the latest values of it
 * 
 */



export function* fetchCategoriesAsync() {
    try {
    /*Different of the redux thunk that we were using, we cannot use an async generator, it is actually the basis for the
    * async/await, and here we are going to use like the example below, and when the yield returns something it will
    basically be a generator effect, and that's where we use call, anywhere we have a function and we want to turn it
    into an effect, we want to use the call keyword 

        fetchCategoriesAsync Generator Function:

    1 - yield call(getCategoriesAndDocuments, 'categories'): Pauses the generator until the asynchronous call to
    getCategoriesAndDocuments('categories') is complete. The result is stored in categoriesArray.

    2 - yield put(fetchCategoriesSuccess(categoriesArray)): Pauses the generator until the fetchCategoriesSuccess action is
    dispatched with the categoriesArray.

    3- yield put(fetchCategoriesFailed(error)): Pauses the generator until the fetchCategoriesFailed action is dispatched 
    with the error if there is an exception.
    */
    
      const categoriesArray = yield call(getCategoriesAndDocuments, 'categories')
      /* Inside a generator, we do not call dispatch inside of a generator, we call put */
      yield put(fetchCategoriesSuccess(categoriesArray))
      
  } catch (error) {
    yield put(fetchCategoriesFailed(error))
  }
}

export function* onFetchCategories() {
  /**
   * Take latest receives two arguments, the first being the actual action we are listening to, and the next argument
   * is what we actually want to happen
   * In this case, the way that the data will flow is that whevnever we "takeLatest" fetch categories start action
   * we are going to initialize the fetchCategoriesAsync saga, this is going to attempt to fetch our categories array
   * from firebase and if that successfull, we are going to put that fetchCategoriesSuccess action with the categories array
   * 

   * yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync): Pauses the generator until
   * the latest occurrence of the FETCH_CATEGORIES_START action is detected. It then invokes the fetchCategoriesAsync generator.
   
   */
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  /**
   * All is a function that essentially says to run everything inside and only complete when all of it is done 
   * it will give us an array of different functions, different generators, anything that is on the function and 
   * it will wait all of it complete until we continue
   * 
   * yield all([call(onFetchCategories)]): Pauses the generator until all sagas inside the array (in this case, only
   * onFetchCategories) are complete. It ensures that all specified sagas finish executing before moving on.
   */

  yield all([call(onFetchCategories)])

}

/*
Summary:
yield is used in Redux Saga to pause the generator function until a specific condition or operation is fulfilled.
In asynchronous calls (yield call), it pauses until the asynchronous operation is complete.
In dispatching actions (yield put), it pauses until the action is dispatched.
yield takeLatest pauses until the specified action is detected, and then it invokes the associated saga.
Redux Saga leverages the generator function's ability to pause and resume, providing a more synchronous-looking flow for handling asynchronous operations.
*/ 