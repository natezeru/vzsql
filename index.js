const {sequelize, DataTypes, Model} = require('./db');

const { Resturant } = require('./Resturant');
const { Menu } = require('./Menu');
const { Items }  = require('./Items')


//Create our Association!
Resturant.belongsTo(Menu) //adds a foreign key on the musician table, for the band they belong to
Menu.hasMany(Items)  //gives us Sequelize magic methods
Items.hasOne(Items)
module.exports = { Resturant, Menu, Items }; // make sure we export our models with the associations added!