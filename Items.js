const {sequelize, DataTypes, Model} = require('./db');

// Create a Band Table
class Items extends Model {}


// Create attributes for band model
Items.init({
	name: DataTypes.STRING,
	price: DataTypes.NUMBER
}, {
	sequelize
})


module.exports = { Items }