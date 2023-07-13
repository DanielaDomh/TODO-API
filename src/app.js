const express = require('express');
const Tasks = require('./models/tasks.models')
const Users = require('./models/users.models');
const db = require('./utils/database');
require('dotenv').config();
const cors = require('cors');

const initModels = require('./models/initModels');
initModels();

db.authenticate()
.then(() => {
    console.log('Base de datos conectada');
})
.catch(error => console.log('error'))

const PORT = process.env.PORT ?? 5000;

//{alter:true}
db.sync().then(() => console.log('Base de datos sincronizada'))
const app = express();

app.use(express.json());
app.use(cors());

// PENDIENTES un endpoint para obtener todas las tareas de un usuario incluidas sus categorias ( filtros (where), include) 


//Create USERS
app.post('/newuser', async (req, res) => {
    try {
        const newUser = req.body;
        const user = await Users.create(newUser);
        res.status(201).json(user);
    } catch(error){
        res.status(400).json(error);
    }
})

//Create TASKS
app.post('/newtask', async (req, res) => {
    try {
        const newTask = req.body;
        const task = await Tasks.create(newTask);
        res.status(201).json(task);
    } catch(error){
        res.status(400).json(error);
    }
})

//Get users tasks and categories
app.get('/todos', async (req, res) => {
    try {
        const user = await Users.findAll({
            include:Tasks,
        });
        res.json(user);
        
    } catch {
        res.status(400).json(error);
    }
});

//Update task state (completed)
app.put('/task/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const taskInfo = req.body;
        await Tasks.update(taskInfo, {
            where: {id}
        })
        res.status(204).send();
    } catch(error) {
        res.status(400).json(error);
    }
});

//Delete tasks
app.delete('/task/:id', async(req, res) => {
    try{
     const { id } = req.params;
     await Tasks.destroy({
         where: {id}
     });
     res.status(204).send();
    } catch (error) {
     res.status(400).json(error);
    } 
 })

app.get('/', (req,res) => {
res.send('Servidor funcionando!');
});

app.listen(PORT, () => {
console.log(`servidor escuchando en el puerto ${PORT}`)
});