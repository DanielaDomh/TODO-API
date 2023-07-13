const Tasks = require('./tasks.models');
const Users = require('./users.models');
const Categories = require('./categories.models');

const initModels = () => {
    //Task - users
    Tasks.belongsTo(Users, {foreignKey: 'taskId'});
    Users.hasMany(Tasks, {foreignKey: 'taskId'});
    //Task - Category
    Categories.hasMany(Tasks, {foreignKey: 'categoryId'});
    Tasks.belongsTo(Categories, {foreignKey:'categoryId'});
};

module.exports = initModels;