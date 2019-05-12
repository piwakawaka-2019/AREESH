import dictionary from 'datamuse'
import request from 'superagent'

export const getDefinitions = async (word, validateWord) => {
    try {
        let searchQuery = `https://api.datamuse.com/words?sp=${word}&md=d&max=1`
        let response = await request.get(searchQuery)
        let definitions = response.body.length ? response.body[0].defs : null
        validateWord(definitions)
    }
    catch (err) { console.log('error: ', err); }
}
