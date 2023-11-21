import { all, call } from 'redux-saga/effects'
import { categoriesSaga } from './categories/categories.saga'
import { userSaga } from './user/user.saga'


/*This function signature, the function* is a generator function, the generator function is somewhat new that was brought
to the javascript ecosystem, and native to js.
It is basically a function that resembles async await. Even though it is not exactly async await, it's got almost a dif
ferent flair to it, but it is very similar in the sense that with ou async await functions, we await our asynchronous ev
ents, where we pause the execution inside of an async function whenever we see the await call. Generator functions are
very similar in the sense that they also pause the execution whenever they see a specific key inside of the function
Generators functions are very similar, in the sense that they also pause their execution whenever they see a specific key
inside of the function, and that key is called a yield
*/
 

/**
 * A generator function in it's most basic example is
 * 
 * function* gen(i) {
      yield i;
      yield i + 5;
 * }

  if we invoke this function like const g = gen(5)

  the first g.next() will result into { value: 5, done: false }
  the second g.next() will result into { value: 15, done: false}
  the third will result into { value: undefined, done: true }

  so basically by calling the g.next(5) it means that the i initial value is 5, and when we call the g.next() it will
  stop when it encounters that first yield value, and in the first case, the property contains the yielded value 5 and
  it done is set to false because there are more values to be yielded.
  When we call g.next() for the second time it will resume the action from where it was paused, in that case, after the
  yield is 5 returned, then it goes into yield i + 5, it will return { value: 10, done: false }
  On the next g.next() call it will return value: undefined, done: true because there aren't any values to be yielded

  Saga will work in that way, because it needs to know and give us the control over when we want to continue the execu
  tion of the block of code that we've written
  
  yield all([call(categoriesSaga)]): Pauses the generator until the categoriesSaga is complete. It ensures that the
  categoriesSaga finishes before moving on to other sagas if any.
 */
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)])
}
