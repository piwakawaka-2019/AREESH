import request from 'superagent'

export function transcribeSpeechAPI (fileName) {
    return request
    .post('/api/speech/')
    .send({fileName: fileName})
    .then(res => res.body['transcript'])
}