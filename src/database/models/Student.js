const { sequelize } = require("../index");
const { DataTypes } = require("sequelize");

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
    marks: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Student",
    timestamps: true,
    paranoid: true,
    tableName: "Student",
  }
);

Student.sync();
module.exports = Student;
