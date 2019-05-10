const state ={
    auth,
    currentWord,
    wordHistory,
    wordLibrary,
    users //stretch
}

const auth = {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ""
}


const currentWord = {
        word: 'apple',
        definition: 'The round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.',
        // the time string needs to be converted back to a date object upon extraction
        startTime: 'Fri May 03 2019 12:22:50 GMT+1200 (New Zealand Standard Time)',
        attemptDuration: null,
        lettersCorrect:[],
        wordCorrect:false
}

const wordHistory = [
    {
        word: 'apple',
        // the time string needs to be converted back to a date object upon extraction
        startTime: 'Fri May 03 2019 12:22:50 GMT+1200 (New Zealand Standard Time)',
        attemptDuration: 4.2,
        lettersCorrect:[
            true,true,false,false,false
        ],
        wordCorrect:false
    },
    {
        word: 'banana',
        // the time string needs to be converted back to a date object upon extraction
        startTime: 'Fri May 03 2019 12:22:50 GMT+1200 (New Zealand Standard Time)',
        attemptDuration: 3,
        lettersCorrect:[
            true,true,true,true,true,true
        ],
        wordCorrect:true
    }
    
]

//If the user wants to pick from a list of words or a set difficulty
const wordLibrary = [
    {
        word: apple,
        definition: 'The round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.'
    },
    {
        word: banana,
        definition: 'A long curved fruit which grows in clusters and has soft pulpy flesh and yellow skin when ripe.'
    }
]

//not needed for mvp but perhaps for high-score stretch 
const users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        userName: 'johndoe',
        hourlyWage: 100
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        userName: 'janedoe',
        hourlyWage: 100
    },
    {
        firstName: 'Mickey',
        lastName: 'Mouse',
        userName: 'houseofmouse',
        hourlyWage: 100
    }
]
