# Udemy-Site-NodeJS
My first project with Node incorporating react


## Background
I had past development experience with React and Node before starting this project. Node was briefly in college, while React was a few months while working at Asset Health. 

This project brought my knowledge together with both working in unison. Node used much newer packages then a previously used, while React included a few new packages and provided a new file structure for how to organize states with Redux.

The live site can be viewed here: https://evening-everglades-25873.herokuapp.com/


## Summarized features
Maintain user accounts with OAuth authentication. Uses Google Strategy and is felxible to incorporate other platforms (Facebook, Github, etc) after going through proper steps to obtain an API key
Stores routes for retriving backend data on MongoDB with Node
Uses Stripe API to saves test payments, that provide users with credits to create surveys
Sends emails to users and tracks feedback results with sendgrid API integration
Integrates React front-end with Node backend with a free hosting option, Heroku
Store state data of user logins, authentication, and survey form data with redux and redux-forms


## Important Services / Packages
There were great packages I used for the first time. While some of these were used before in my previous work, having them as created on my personal computer (and referencable in github) helped me have code that can be referenced and maintained for future work. Here is a list of those technologies


## Node Services / Packages

### `express`

This package made it simple to reference and save URI paths in this application. It was particularly helpful for managing API data with routes that double checked if users were logged in or authenticated from Google OAuth.

### `mongoose`

Falling under the category of MongoDB and NoSQL, this was a good introduction into how to store and reference data. I did not have much NoSQL before this project, and now I feel comfortable making queries with MongoDB. It also made me aware of how to query subcollections, to avoid fetching unnecessary amounts of data that made the application less clean

### `passport`

User authentication is popular with google, facebook, github, and other websites. Having this package available and learning how to use it for logging users quickly into applications (without having to create usernames or passwords themselves) is a great tool to have learned.

### `stripe`

I have used stripe for payments before in PHP. Learning how to incoporate this API into another backend such as Node was good experience.

### `sendgrid`

Sendgrid allow users to send emails. This was a nice tool to learn for managing email messages, and its great to know that it's free to use for personal projects.


## React Services / Packages

### `axios`

A package I used in my work multiple times, and is excellent tool for pulling data from APIs. I plan to continue usomg this package in the future and have had an easy time incoporating it into my applications up to this point

### `redux`

Becoming more familar with redux to manage state data was valuable. If a company plans to use this in their React app, I will be familar with how reducers can organize and pull this data with API calls into a store to manage state data

### `Router`

Managing links and routes with react-router-dom will be important for any group that incorporates this setup. It is a good skill to know and be familar with for React projects 

