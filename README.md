# Christmas-wishlist-server

## About
This is a NodeJS coding challenge that can be found at [Glitch Santa App](https://glitch.com/~nodejs-santa-app).
Anyone can attempt this challenge by remixing their own using the link above and following the instructions. 
It is a fun little challenge, so please feel free to remix your own and see how it goes.

It is a quite simple application. However, it did teach me how to use cron jobs programatically. Previously, I've only used cron jobs as part
of running jobs on AWS, so it was nice fun to learn how to run cron jobs programatically. This is likely something I will also use in some of my future projects.

I also made an accompanying [React App](https://github.com/Jonashr/christmas-wishlist-client) for the client part of the challenge just for fun. 
Feel free to check this out as well!

## Available Commands
**Run the application**
    
    npm start
    
**Run in development mode**
    
    npm run dev
    
**Lint**
    
    npm run lint

**Lint + Automatic fix of linting errors**
    
    npm run fix
    
**Run tests**
    
    npm test

## Building and Running the Docker Image

Building the image is done by issuing the following Docker command:

    docker build -t someimagetag .

Before running the image you will have you will have to create an ethereal email at [Ethereal email](https://ethereal.email/)

And set the following variables:

    MAIL_USERNAME = The ethereal email you registered
    MAIL_PASSWORD = The password
    EMAIL_SENDER = Any.email.sender@email.com
    EMAIL_RECIPIENT = Any.email.recipient@email.com

Run the container by issuing a command such as:
    
    docker run -p 3001:3001 -e MAIL_USERNAME=something@ethereal.email -e MAIL_PASSWORD=something -e EMAIL_SENDER=do_not_reply@something.com -e 
    EMAIL_RECIPIENT=something@something.com wishlist
    
If you login to the ethereal email address you should be receiving a email every 15seconds. For finding valid users to input, check out the URLs in the config.js file.


