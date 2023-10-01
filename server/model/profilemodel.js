// models/student.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); 

const Student = sequelize.define('students', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},
{
  timestamps: true,
}
 );

module.exports = Student;


