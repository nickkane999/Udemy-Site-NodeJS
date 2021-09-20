What this application uses
	1. Heroku
		-Introduction
			-3rd party service for hosting websites. Lets us put the website on a public url that's free
			-Need to setup package.json to have startup run script. Also need .gitignore on node_modules so server doesn't download all the files
			-Download heroku cli so you can run the command line and link directly to heroku's server
			-This project's url: https://evening-everglades-25873.herokuapp.com/
		-Common commands
			-heroku login
			-heroku create
			-git remote add heroku https://git.heroku.com/evening-everglades-25873.git
			-git push heroku main
	2. APIs
		-Google oauth
			-Need to have an account with site to get google oauth working for our app
			-Create a new project for app
			-Enable API called "Google+ API"
			-Go to "oauth consent screen" and fill out their forms
			-Click on credentials and add an "oauth client ID"
				-Enter origins (homepage) and redirect uris
				-Save OAuth client credentials
	3. Data storeage
		-MongoDB
			-Create account
			-Set up cluster db
			-Add user, connection IP, and DB
	4. Prod vs Dev
		-Both OAuth and MongoDB resources need to be separated by production vs dev
		-Do not need duplicate accounts, but will need to perform same steps to create a cluster and oauth project for production accounts
	5. Stripe
		-3rd party to handle payments
		-Only using test payments currently
	6. SendGrid
		-3rd party to handle sending emails
	7. Referenced packages
		-Express
		-MongoDB

udemy-nodejs