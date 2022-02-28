let Room = require('../Model/room');
let Meeting = require('../Model/meeting');

// Récupérer tous les ROOM (GET)
function getRooms(req, res){
    Room.find((err, rooms) => {
        if(err){
            res.send(err)
        }

        res.send(rooms);
    });
}


// Ajout d'un room (POST)
function postRoom(req, res){
    let room = new Room();
    room.id = req.body.id;
    room.num = req.body.num;
    room.material = req.body.material;
    room.capacity = req.body.capacity;

    console.log("POST room reçu :");
    console.log(room)

    room.save( (err) => {
        if(err){
            res.send('cant post room ', err);
        }
        res.json({ message: `${room.num} saved!`})
    })
}

// Ajout d'un meeting (POST)
function postMeeting(req, res){
    let meeting = new Meeting();
    meeting.id = req.body.id;
    meeting.start = req.body.start;
    meeting.end = req.body.end;
    meeting.id_room = req.body.id_room;
    meeting.description = req.body.description;

    console.log("POST meeting reçu :");
    console.log(meeting)

    meeting.save( (err) => {
        if(err){
            res.send('cant post meeting ', err);
        }
        res.json({ message: `${meeting.description} saved!`})
    })
}

// Récupérer tous les Meeting par room_id (GET)

function getMeetingByRoomId(req, res){
    let meetingId = req.params.id_room;

    Meeting.findOne({id_room: meetingId}, (err, meeting) =>{
        if(err){res.send(err)}
        res.json(meeting);
    })
}

function getRoomById(req, res){
    let roomId = req.params.id;

    Room.findOne({id: roomId}, (err, room) =>{
        if(err){res.send(err)}
        res.json(room);
    })
}

module.exports = { getRooms ,postRoom,postMeeting , getMeetingByRoomId, getRoomById };
