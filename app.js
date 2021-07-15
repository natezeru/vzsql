const express = require('express');
const {Sequelize }= require('sequelize')
const app = express();
const {Resturant, Menu} = require('./index');


const port = 8080;

app.get('/', (req,res) => {
  res.send('Hello Word')
})

