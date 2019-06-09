const Sequelize = require('sequelize');
const db= new Sequelize('shopdb','shopper','shoppas',{
    host: 'localhost',
    dialect : 'mysql',
    pool:{
        min : 0,
        max : 5,
    }
});

// this creates a table users attribute => id, name 

const user=db.define('users',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    name :{
        type : Sequelize.STRING,
        allowNull : false
    }
})

// this creates a table products attribute => id, name .
const product=db.define('products',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    name :{
        type : Sequelize.STRING,
        allowNull : false
    },
    manufacturer :{
        type : Sequelize.STRING,
        allowNull : false
    },
    price : {
        type: Sequelize.FLOAT,
        defaultValue : 0.0,
        allowNull: false,
    }
})

db.sync()
    .then(()=>{
        console.log("database created ! ")
    })
    .catch((err)=>{
        console.log(err)
    })
//exporting CLASSES
module.exports={user,product}