

const router = require('express').Router()

const { saveGame, getGameHistory} = require('../db/game')
const {parseMeetingsData} = require ('./routeFunctions')
const verifyToken = require('express-jwt')


router.get('/history', verifyToken({secret:process.env.JWT_SECRET}), async (req, res) => {
    //Get a Users Meeting History
    //We will get the user ID from token when we figure that out

    console.log('user', req.user)
    const meetings = await getUserMeetings(userID)
    res.json(parseMeetingsData(meetings))


})

router.post('/', async (req, res) => {
    //Save a completed meeting

    try{
        const meetingData = req.body;
        const meeting = {...meetingData, attendees:meetingData.attendees.length}
        const attendeeNames = meetingData.attendees;
    
        const meetingID = await saveMeeting(meeting)
    
        await saveAttendees(meetingID, attendeeNames);
    
        res.status(200)
    }
    catch(err){
        err => res.status(500).send({message: "Server Error"})
    }
  


})

router.get('/:id/users', async (req, res) => {
    // Get the attendees of a Meeting
    const meetingID = req.params.id;
    const users = await getAttendees(meetingID)
    res.json(users)
})

module.exports = router