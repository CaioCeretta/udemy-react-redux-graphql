import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants'

import * as reducers from './reducers'

describe('searchRobots', () => {

  const initialStateSearch = {
    searchField: ''
  }

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  })
})

describe('requestRobots', () => {
  const initialState = {
    robots: [],
    isPending: false
  }

  it('Should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialState)
  })

  it('Should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialState, {
      type: REQUEST_ROBOTS_PENDING,
    })).toEqual({
      robots: [], 
      isPending: true
    })
  })

  it('Should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(initialState, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'Test',
        email: 'test@gmail.com'
      }]
    })).toEqual({
      robots: [
        {
          id: '123',
          name: 'Test',
          email: 'test@gmail.com'
        }
      ],
      isPending: false
    })
  })

  it('Should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(initialState, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'nooooo'
    })).toEqual({
      error: 'nooooo',
      robots: [],
      isPending: false
    })
  })

})