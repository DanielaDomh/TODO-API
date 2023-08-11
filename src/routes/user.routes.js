const { Router } = require("express");
const { getAllUsers, createUsers, createTask, createCategory, updateTask, deleteTask } = require("../controllers/users.controlles");

//Instancia del router
const router = Router();

//Get users tasks and categories
router.get('/getUsers', getAllUsers);

//Create USERS
router.post('/newuser', createUsers);

//Create TASKS
router.post('/newtask/:id', createTask);

//Create Categories
router.post('/newCategory', createCategory);

//Update task state (completed)
router.put('/task/:id', updateTask)

//Delete tasks
router.delete('/task/:id', deleteTask)

module.exports = router;