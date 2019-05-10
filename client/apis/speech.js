import request from 'superagent'

export function transcribeSpeech (fileName) {
    return request
    .post('/api/speech/transcribe')
    .send({fileName: fileName})
    .then(res => {
        console.log(typeof res.body['transcript'])
        return res.body['transcript']
    })
}

export function sendBlob (blob) {
    console.log("sendBlob function called")
    return request
    .post('/api/speech/blob')
    .send({blob: blob})
    .then(() => {})
    // .then(res => res.body['transcript'])
}

export function checkSpelling (word, spelling) {
    let score = []

    let spellingArr = spelling.split("").filter(char => {
        return char != " "
    })
  
    for (var i = 0; i < word.length; i++) {
        if(spellingArr[i] == word.charAt(i)){
            score.push(word.charAt(i))
        } else {
            score.push('X')
            return score
        }
    }

    score.push('✓')
    return score
}
