import request from 'superagent'

export function transcribeSpeech(fileName) {
    return request
        .post('/api/speech/transcribe')
        .send({ fileName: fileName })
        .then(res => {
            return res.body['transcript']
        })
}

export function sendBlob(blob) {
    return request
        .post('/api/speech/blob')
        .send({ blob: blob })
        .then(() => { })
    // .then(res => res.body['transcript'])
}

export function checkSpelling(word, spelling) {
    let score = []

    let spellingArr = spelling.split("").filter(char => {
        return char != " "
    })

    for (var i = 0; i < word.length; i++) {
        if (spellingArr[i] == word.charAt(i)) {
            score.push(word.charAt(i))
        } else {
            score.push('X')
            return score
        }
    }

    score.push('✓')
    return score
}

export function speltCorrectly(word, attempt) {
    let score = []

    let spellingArr = attempt.split("").filter(char => {
        return char != " "
    })

    for (var i = 0; i < word.length; i++) {
        if (spellingArr[i] == word.charAt(i)) {
            score.push(word.charAt(i))
        } else {
            score.push(spellingArr[i])
            
            return { word:score.join('').toUpperCase(), isCorrect: false }
        }
    }

    score.push('✓') 
    return { word:score.join('').toUpperCase(), isCorrect: true }

}