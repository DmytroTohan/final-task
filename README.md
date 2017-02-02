# Instagram-mini

A simple version of [Instagram](https://www.instagram.com/), where you can create an account, publish photos, comment and like posts of other users.

### Getting started

Before installing the application, you must install `meteor`.

For `osx/linux` type on your terminal `curl https://install.meteor.com/ | sh`

For `windows` go to https://www.meteor.com/install, download and run Meteor installer.

### Installing

You can clone this repository. Open terminal and type: 

```
  git clone https://github.com/DmytroTohan/final-task.git 
```

or download ZIP. After that, go to the app folder `../final-task` and type:

```
  npm run build
```
after that, type:

```
  meteor
```

Open your web browser and go to http://localhost:3000 to see the app running.

## Deployment

App was deployed on [Heroku](http://www.heroku.com)

Link: [https://instagram-mini.heroku.com](https://myinstagram.heroku.com)

## Built With

* [Meteor](https://www.meteor.com/) - is a full-stack JavaScript platform, which is suitable for writing real-time application.
* [MongoDB](https://www.mongodb.com/) - all data is stored in the mongo collections. For the photos storage used [GridFS](https://docs.mongodb.com/manual/core/gridfs/)
* [Bootstrap](http://getbootstrap.com/getting-started/) - Used to generate RSS Feeds

