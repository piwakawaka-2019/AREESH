const state ={
    auth,
    currentMeeting,
    users,
    meetingHistory
}

const auth = {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ""
}

const currentMeeting = {
    meetingName: 'Exciting shite',
    // this is a timestamp string that will be set at the start of the meeting
    time: 'Fri May 03 2019 12:22:50 GMT+1200 (New Zealand Standard Time)',
    // duration will default to null, and be set when meeting is saved
    duration: 3600,
    // username strings
    attendees: ["johndoe", 'janedoe', 'houseofmouse'],
    // cost of each user
    hourlyWages: [100, 100, 100],
    // cost to be set when meeting is saved
    totalCost: 1000
}

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

// an array of all the meetings the logged in user has attended
const meetingHistory = [
    {
        meetingName: 'Exciting shite',
        // the time string needs to be converted back to a date object upon extraction
        time: 'Fri May 03 2019 12:22:50 GMT+1200 (New Zealand Standard Time)',
        duration: 3600,
        // the people who attended the meeting
        attendees: [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                userName: 'johndoe',
                hourlyWage: 100
            },
            {
                id: 2,
                firstName: 'Jane',
                lastName: 'Doe',
                userName: 'janedoe',
                hourlyWage: 100
            }
        ],
        // cost to be set when meeting is saved
        totalCost: 1000
    }
    // more arrays......
]