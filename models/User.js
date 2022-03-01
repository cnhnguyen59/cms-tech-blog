const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class User extends Model {}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        firstName:{
          type: DataTypes.STRING,
          allowNull: false, 
        },
        lastName:{
          type: DataTypes.STRING,
          allowNull: false, 
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [6],
            },
        },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
)

module.exports = User;