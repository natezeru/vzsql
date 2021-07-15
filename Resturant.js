const {sequelize, DataTypes, Model} = require('./db');

// Creates a Resturant Table in our database
class Resturant extends Model {
	//add custom methods for advanced querying
}

// Create attributes (columns) for our model
Resturant.init({
	name: DataTypes.STRING, 
	location: DataTypes.STRING
}, {
	sequelize, // What database is our table stored in
	// timestamps: false,
});

module.exports = { Resturant }