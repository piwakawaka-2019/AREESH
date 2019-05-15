import { combineReducers } from "redux"

import auth from "./auth"
import users from "./users"
import currentWord from "./currentWord"
import game from "./game"
import wordHistory from "./wordHistory"
import userGameHistory from "./userGameHistory"
export default combineReducers({
  auth,
  users,
  currentWord,
  game,
  wordHistory,
  userGameHistory
})
