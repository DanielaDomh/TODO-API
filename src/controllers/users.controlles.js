const Users = require("../models/users.models")
const Tasks = require('../models/tasks.models')
const Category = require('../models/categories.models');

//Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const user = await Users.findAll({
           attributes: { exclude: [
            "password"
           ]},
           include: {
            model: Tasks,
                attributes: {
                    exclude: ["userId", "categoryId"]
            },
                include: Category
        }
        })
        res.json(user);
    } catch {
        res.status(400).json(error);

    }
}

//Crear nuevo usuario
const createUsers = async (req, res) => {
    try {
        const newUser = req.body;
        const user = await Users.create(newUser);
        res.status(201).json(user);
    } catch(error){
        res.status(400).json(error);
    }
}

//Crear tareas CHECAR PENDIENTE
const createTask = async (req, res) => {
    try {
        const newTask = req.body;
        const task = await Tasks.create(newTask)
        res.status(201).json(newTask);
    } catch(error){
        res.status(400).json(error);
    }
};

//Actualizar tareas
const updateTask = async(req, res) => {
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
}

//Eliminar tareas
const deleteTask = async(req, res) => {
    try{
     const { id } = req.params;
     await Tasks.destroy({
         where: {id}
     });
     res.status(204).send();
    } catch (error) {
     res.status(400).json(error);
    } 
 }


module.exports = {
    getAllUsers,
    createUsers,
    createTask,
    updateTask,
    deleteTask
}