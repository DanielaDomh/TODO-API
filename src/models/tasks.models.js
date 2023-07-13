const { DataTypes } = require('sequelize');
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
},
    { timestamps: false }
);

module.exports = Tasks;
