const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Comments extends Model {}

Comments.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement:true
        },
        comment:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        date_created:{
            type: DataTypes.DATE,
            allowNull:false
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            }
        },
        article_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'article',
                key:'id'
            }
        }
    },
    {
        sequelize,
        /* timestamps: false, */
        freezeTableName: true,
        modelName: 'comments'
    }
)

module.exports = Comments;