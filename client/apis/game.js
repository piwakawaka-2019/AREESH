import request from 'superagent'
import { get } from "../utils/localstorage";
import { isAuthenticated } from "../utils/auth";

export function getGameHistory() {
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