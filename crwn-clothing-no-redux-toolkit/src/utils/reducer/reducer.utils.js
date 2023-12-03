/*Creating this utils reducer is used so we don't have to typeout the name of these keys which in often times it leads a
little bit more to human error, so this is just an optimation we can make*/


export const createAction = (type, payload) => ({type, payload});