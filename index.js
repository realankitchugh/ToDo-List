const express=require('express');
const port=8000;
const db=require('./config/mongoose');
const Tasks=require('./models/tasks');
const app=express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.post('/create-task', function(req, res){
    Tasks.create({
        task: req.body.task,
        date: req.body.date,
        category: req.body.category
    }, function(err, newTask){
        if(err){
            console.log('error'); 
            return;
        }
        console.log('**********', newTask);
        return res.redirect('back');
    });
});

app.get('/', function(req, res){
    Tasks.find({}, function(err, task){
        if(err){
            console.log('error!');
            return;
        }
        return res.render('home', {
            title: 'Todo List App',
            task_list: task
        });
    })
});


app.listen(port, function(err){
    if(err){
        console.log(`There is an error running the Server Bitch! Here: ${err}`);
        return;
    }
    console.log(`Server is up and running at port: ${port}`);
})