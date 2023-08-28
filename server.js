require('/db/connect')
const express = require('express');
const app = express();
const routes = require('./routes/tasks');

//middleware

app.use(express.json());

//routes
app.get('/hello', (req, res) => {
    res.send('Get all items');
});

app.use('api/va/tasks', task);

//app.get('/api/v1/task')           -get all the tasks
//app.post('/api/v1/task')          -create new task
//app.get('/api/v1/task/:id')       -get a single task
//app.patch('/api/v1/tasks/:id')    -update task
//app.delete('/api/v1/task/:id')    -delete task

const port = 3000;

app.listen( port,
    console.log(`Server is listening on port ${port}....`)
)