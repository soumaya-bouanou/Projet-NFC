let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let rooms = require('./routes/rooms');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri = 'mongodb+srv://admin:admin@cluster0.wpdpf.mongodb.net/testa?retryWrites=true&w=majority';