/**
 * 
 * app.js is main server file that contains 
 * express server
 * other entries;
 * please do not change this file without knowing.
 */

const express = require('express');
const cors  = require('cors');
let system = require('./resource/system');
/**
 * creates tables if not exist
 */
require('./models');
const port  = system.server.port;
const hostname = system.server.hostname;
let app = express();
/**
 * this is auth guard
 * all operations without autherization to be called here.
 */

app.use(cors)




app.use('/auth',require('./authRouter'));

/**
 * this is application route to access all usecases using rest api
 * 
 */
app.use('/',require('./appRouter'));

/**
 * it starts our server
 * 
 */


app.listen(port,hostname,()=>{
 console.log("app started at http://"+system.server.hostname+":"+system.server.port);   
})