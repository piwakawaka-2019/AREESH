import dictionary from 'datamuse'
import request from 'superagent'

export const getDefinitions = async (word, setDefinitions) => {
    try {
        let searchQuery = `https://api.datamuse.com/words?sp=${word}&md=d&max=1`
        let response = await request.get(searchQuery)
        let definitions = response.body[0].defs;
        setDefinitions(definitions)
    }
    catch (err) { console.log('error: ', err); }
}
