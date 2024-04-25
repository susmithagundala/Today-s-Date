const express = require("express");
const app = express(); 
app.get('/',(request,response)=>{
    const d = new Date();
    response.send(`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`);
});
module.exports = app;