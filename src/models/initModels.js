const Tasks = require('./tasks.models');
const Users = require('./users.models');
const Categories = require('./categories.models');

const initModels = () => {
    //Task - users
    Tasks.belongsTo(Users, {foreignKey: 'userId'});
    Users.hasMany(Tasks, {foreignKey: 'userId'});
    //Task - Category
    Tasks.belongsTo(Categories, {foreignKey:'categoryId'});
    Categories.hasMany(Tasks, {foreignKey: 'categoryId'});
};

module.exports = initModels;