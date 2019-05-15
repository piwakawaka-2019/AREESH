import request from 'superagent'
import { get } from "../utils/localstorage";
import { isAuthenticated } from "../utils/auth";

export function getUserGames() {
  const token = get('token')
  const headers = {
    Accept: 'application/json'

  }
  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request
    .get('/api/game/history')
    .set(headers)
    .then(res => res.body)
    .catch(err => {
      throw err
    })
}

export function saveGame(game) {
    const token = get('token')
    const headers = {
      Accept: 'application/json'
    }
  
    if (isAuthenticated()) {
      headers['Authorization'] = `Bearer ${token}`
    }

    return request
      .post('/api/game')
      .set(headers)
      .send(game)
      .then(res => res.body.message)
      .catch(err => {
        throw err
      })
}


  
