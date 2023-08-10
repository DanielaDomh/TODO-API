const { DataTypes } = require('sequelize');
const db = require('../utils/database')

const Users = db.define('users', {
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
},
    { timestamps: false }
);

module.exports = Users;
