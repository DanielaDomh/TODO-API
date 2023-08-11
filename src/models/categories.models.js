const { DataTypes } = require('sequelize');
const db = require('../utils/database')

const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
},
    { timestamps: false }
);

module.exports = Categories;