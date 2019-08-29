# Welcome to the soccer-scores app

Soccer related web application using the MEAN Stack and JWT authentication. An Angular frontend service gets soccer matches and league details by using JSON data from the The Sports DB Free API (https://www.thesportsdb.com/), and gives the oportunity to the users to see info about upcomming and already played matches, aswell as information and standings for the included leagues. Logged users also have the option to leave a comment in the comment section of a finished event. The comment functionality is made by making an Express app, running on Node.js and also using MongoDB as a database and Mongoose for modeling schemas.

## Home page

 The home page shows daily-events component that list all matches from yesterday, today and tomorrow 
![home top](https://user-images.githubusercontent.com/53303687/63652541-2869e480-c76a-11e9-80d9-483173249fe5.png)

There is also pagination functionality added so it would be easier for the user to lookup the available events
![home bottom](https://user-images.githubusercontent.com/53303687/63652552-54856580-c76a-11e9-8bf1-3f80c7cf9366.png)

## Leagues

Clicking on the Leagues dropdown the user can choose a league to see details about it
![league_list](https://user-images.githubusercontent.com/53303687/63652578-b47c0c00-c76a-11e9-8f60-1504a5e7e001.png)

After clicking for example on the first option the league-details component gets loaded with information about the selected league
![league_details_top](https://user-images.githubusercontent.com/53303687/63652595-c78edc00-c76a-11e9-8e0a-5a37dd43f779.png)
![league_details_bot](https://user-images.githubusercontent.com/53303687/63652611-d9707f00-c76a-11e9-9644-475184010e04.png)

## Event details

After returning to the home component the user can choose to see the details about an event that already ended by clicking on the Details button
![details button hover](https://user-images.githubusercontent.com/53303687/63652644-20f70b00-c76b-11e9-98c6-c070cdc79f9d.png)

After that a modal is loaded containing information about the game that has been selected, as well as the comment section
![daily_event_details_top](https://user-images.githubusercontent.com/53303687/63652657-41bf6080-c76b-11e9-94cc-b152e886ac1a.png)

## Login/Signup

In order to comment a game the user has to be logged in. This is possible by clicking on the Login button in the navigation
![hov_login_but](https://user-images.githubusercontent.com/53303687/63652672-7af7d080-c76b-11e9-9e12-081649b06f46.png)

After that the login component is being loaded
![login_component](https://user-images.githubusercontent.com/53303687/63652679-9662db80-c76b-11e9-8228-9aad59fedf55.png)

If there is not registered authorized user, that should be done by clicking on the Sign up button on the navigation
![signup_component](https://user-images.githubusercontent.com/53303687/63652687-b5fa0400-c76b-11e9-8a67-178576c1554f.png)

## Comment

When the authorized user has logged in he can comment on every finished game
![daily_event_comment_write](https://user-images.githubusercontent.com/53303687/63652698-e17cee80-c76b-11e9-8d57-93f3aae56fa5.png)

After clicking on the Add Comment button the comment is being saved and after that it's listed bellow the input form
![daily_event_show_comment](https://user-images.githubusercontent.com/53303687/63652711-fce7f980-c76b-11e9-8a04-bf4b8d17246c.png)
