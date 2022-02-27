const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Article extends Model {}

Article.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement:true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false
        },
        body:{
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created:{
            type: DataTypes.DATEONLY,
            allowNull:false
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            }
        }
    },
    {
        sequelize,
        /* timestamps: false, */
        freezeTableName: true,
        modelName: 'article'
    }
)

module.exports = Article;