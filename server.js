let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let room = require('./routes/rooms');
let meeting = require('./routes/rooms');

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri = 'mongodb+srv://asmaye:Assouma30@cluster0.xgag5.mongodb.net/meetingRooms?retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  };
  
  mongoose.connect(uri, options)
    .then(() => {
      console.log("Connecté à la base MongoDB assignments dans le cloud !");
      console.log("at URI = " + uri);
      console.log("vérifiez with http://localhost:8010/api/rooms que cela fonctionne")
      },
      err => {
        console.log('Erreur de connexion: ', err);
      });
  
  // Pour accepter les connexions cross-domain (CORS)
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
  
  // Pour les formulaires
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  
  let port = process.env.PORT || 8010;



  // les routes
const prefix = '/api';

app.route(prefix + '/rooms').get(room.getRooms);
app.route(prefix + '/rooms')
  .post(room.postRoom);

  app.route(prefix + '/meetings')
  .post(room.postMeeting);

  app.route(prefix + '/rooms/:id')
  .get(room.getRoomById);
// les meetings par roomId
app.route(prefix + '/meetings/:id_room')
.get(meeting.getMeetingByRoomId);

  // On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;
