//eslint-disable-next-line no-unused-vars
const Sequelize = require("kvell-db-plugin-sequelize").dbLib;
const sequelize = require("kvell-db-plugin-sequelize").dbInstance

const Test =  sequelize.define('test',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING
    }
},{freezeTableName:true})
module.exports = Test