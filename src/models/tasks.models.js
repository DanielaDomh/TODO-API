const { DataTypes, INTEGER } = require('sequelize');
const db = require('../utils/database')

const Tasks = db.define('tasks', {
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN(false),
        allowNull: false,
    },
    userId: {
        type: INTEGER,
        allowNull: false,
    },
    categoryId:{
        type: INTEGER,
        allowNull: false,
    }
},
    { timestamps: false }
);

module.exports = Tasks;
