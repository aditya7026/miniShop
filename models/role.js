const DataType = require('sequelize');
module.exports = (sequelize)=>{
    const role = sequelize.define('role',{
        id:{
            type:DataType.BIGINT,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataType.STRING,
        },
        description:{
            type:DataType.STRING
        },
        createdBy:{
            type:DataType.STRING,
        },
        modifiedBy:{
            type:DataType.STRING
        }
    },{
        tableName:'mini_role',
        
    });
}