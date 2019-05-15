

const router = require('express').Router()

const { saveUserGame, getUserGames} = require('../db/game')
const {parseMeetingsData} = require ('./routeFunctions')
const verifyToken = require('express-jwt')


router.get('/history', verifyToken({secret:process.env.JWT_SECRET}), async (req, res) => {

   
    const userID = req.user.user_id
    const games = await getUserGames(userID)
    res.json(games)
})

router.post('/',verifyToken({secret:process.env.JWT_SECRET}), async (req, res) => {
    try{

        const game = req.body;
       

        game.userID = req.user.user_id
        
        gameID = await saveUserGame(game)

        res.status(200).send({ message: "Game Saved" })
    }
    catch(err){
        err => res.status(500).send({message: "Server Error"})
    }
    


})

// router.get('/:id/users', async (req, res) => {
//     // Get the attendees of a Meeting
//     const meetingID = req.params.id;
//     const users = await getAttendees(meetingID)
//     res.json(users)
// })

module.exports = router