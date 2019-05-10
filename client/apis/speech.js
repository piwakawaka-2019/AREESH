import request from 'superagent'

export function transcribeSpeechAPI (fileName) {
    return request
    .post('/api/speech/')
    .send({fileName: fileName})
    .then(res => res.body['transcript'])
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
            score.push(spellingArr[i], 'X')
            console.log("Incorrect: ", score)
            return score
        }
    }

    score.push('✓')
    console.log("Winner: ", score)
    return score
}

let word = 'sonic'
let correctSpelling = "s o n i c"
let incorrectSpelling = "s o m i c"

checkSpelling(word, correctSpelling)
checkSpelling(word, incorrectSpelling)