import request from 'superagent'

export function transcribeSpeechAPI () {
    console.log("speech API has been called")
    return request
    .post('/api/speech/')
    // put token in the header of req (like POSTMAN)
    // .set(headers)
    // username and password (not hashed yet)
    // .send(creds)
     // token returned at *2 in routes/auth.js
     // body object set at *3 in server/auth/token.js
    .then(res => res.body.token)
}