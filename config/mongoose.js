const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/task-list-db");
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to the DB'));
db.once('open', function(){
    console.log('Successfully connected to the DB');
});