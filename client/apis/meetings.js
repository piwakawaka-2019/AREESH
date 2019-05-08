import request from 'superagent'

export function getMeetings() {
  const token = get('token')
  const headers = {
    Accept: 'application/json'
  }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request
    .get('/api/meetings')
    .set(headers)
    .then(res => res.body)
    .catch(err => {
      throw err
    })
}

export function saveMeeting(meeting) {
  const token = get('token')
  const headers = {
    Accept: 'application/json'
  }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request
    .post('/api/meetings')
    .set(headers)
    .send(meeting)
    .then(res => res.body)
    .catch(err => {
      throw err
    })
}


