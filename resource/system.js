let system = {
    server: {
        port: 8080,
        hostname: 'localhost'
    },
    database:{
        name:'miniShop',
        username:'aditya',
        password:'Aditya@123',
        host:'localhost',
        dialect:'mysql',
        pool :{
            max:30,
            min:5,
            idle:10000
        }
    },
    email:{

    }
}
module.exports = system;