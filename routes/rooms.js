let Room = require('../Model/room');

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


module.exports = { getRooms ,postRoom};
