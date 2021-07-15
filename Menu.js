const {sequelize, DataTypes, Model} = require('./db');

// Create a Band Table
class Menu extends Model {}


// Create attributes for band model
Menu.init({
	name : DataTypes.STRING,
	
}, {
	sequelize
})


module.exports = { Menu }