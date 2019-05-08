# AREESH

# Week 7 Group Project

This app uses speech-recognition technology to help you test your memory and sharpen your spelling skills!

Just tell the app the word you want to spell. It will appear on your screen briefly before disappearing. 

Now over to you. Spell the word out loud, and AREESH will let you know if you get it right.

## Team Roles
* Product owner		Des
* Scrum Master		Des
* Git Master		Jesse
* FE Lead		    TBC
* BE Lead		    TBC
* Vibe Master		Josh

## User Stories

### MVP

As a user:
* I want to be presented with the correct spelling of a word when I say it out loud so that I can learn how to spell it
* I want to be presented with the definition the word when I say it out loud so that I can make sure it is the word I meant
* I want to get live feedback, letter-by-letter, as I spell a word out loud so I that I can add it to my active vocabulary and train my memory
* I want to be able to see my total number of completed words so I can keep track of my learning progress during each session
* I want to be able to see the rules of the game when I log in, so I know how to play

### Stretch
As a user:
  * I want to be able to view a graph displaying my history of completed words over time, so I can track my learning progress
  * TBC...

  ---

## Views (Client Side - MVP)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | Home | View to display a welcome message, game instructions and a 'start' button |
  | What word? | View to prompt user to verbally provide the word they want to spell, then take that word as a verbal input |
  | Word definition | Displays the word, along with a definition, before disappearing (2s) so the user cna try to memorise it |
  | Live Spelling | Displays the letters the user has correctly spelled so far in green. If the user mispells a letter it displays in red and redirects to the 'word definition' view |
  | Winner | Displays a congratulatory message/animation to the user when they have succesfully spelled the word |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  TBC...

## Store (made up of the Reducers)
```js
const state ={
    auth,
    //TBC...
}

const auth = {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ""
}
 //TBC...
```

 ## Actions

 ### users
 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_USERS | users | retreive the users from the server |

 TBC...


## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token | 
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
TBC...

## Route - POST /api/auth/login

#### Data in
```sh
{
    userName: 'john',
    password: 'god' //password given as plain text
}
```
#### Data Out
```sh
{
    JWT: 'sdf8fd74ergdifgnerg05g'
}
```

## Route - POST	/api/auth/register

#### Data in
```sh
{
    userName: 'sonic-da-hedgehog',
    firstName: 'Nicholas',
    lastName: 'Cage',
    imageURL: './sonic.png'
    password: 'god' //Password given as plain text
}
```
#### Data Out
```sh
{
    //Redirect to login page
    status: 200, //Unsure of exact response at this stage but will be some kind of status 
    status: 400 
    //200 ok
}
```

## Routes 2, 3...
TBC


## DB (Server Side)
  There should be one table for MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | user_name | String (unique)|
  | first_name | String |
  | last_name | String |
  | password_hash | string |
  | image_url | string |

 ---

## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
```

create a .env file, and procure the JWT secret from an admin

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres
AREESH
Login

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!
