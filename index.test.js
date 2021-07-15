const {sequelize} = require("./db");

const {Resturant, Menu, Items} = require("./index") // pull them from index, where we make our association

// const {Band} = require('./Band') //why is this bad? Because our Band doesn't have an association here!

//Destructuring Syntax
// const {banana} = require('./fruit')

// const banana = require('./fruit').banana

describe('Resturant Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can list a resturant name', async() => {
		const testResturant = await Resturant.create({name : "Fogo De Chao"})
		expect(testResturant.name).toBe("Fogo De Chao")
	})

	test('can list the resturants location', async () => {
		const testResturant = await Resturant.create({location: "Dallas, TX"});
		expect(testResturant.location).toBe('Dallas, TX');
	})

	test('can list menu at resturant', async () => {
		const testMenu = await Menu.create({name : 'Desserts'})
		expect(testMenu.name).toBe('Desserts')
	})

	test("can list item name on menu", async () => {
		const testItemName = await Items.create({name: "Cheese Cake"})
		expect(testItemName.name).toBe("Cheese Cake")
	})
	
	test("can list item price on menu", async () => {
		const testItemPrice = await Items.create({price: 17.99})
		expect(testItemPrice.price).toBe(17.99)
	})

	test('Menu has many items', async () => {
		const desertMenu = await Menu.create({name : "Desert"})

		const drinkMenu = await Menu.create({name : "Drinks"})

		const entreeMenu = await Menu.create({name : "Entree"})

		const startersMenu = await Menu.create({name : "Starters"})

		const nachos = await Items.create({name : 'Nachos', price: 6})
		const pasta = await Items.create({name : 'Pasta', price: 25})

		const burger = await Items.create({name : 'Cheese Burger', price: 17})

		const brownie = await Items.create({name : 'Brownie', price: 5})
						
		const iceCream = await Items.create({name : 'Ice Cream', price: 9})

		const beer = await Items.create({name : 'Budlight', price: 6})
	
		const vodka = await Items.create({name : 'Vodka', price: 11})

		const soda = await Items.create({name : 'Sprite', price: 3})

		await desertMenu.addItems(brownie) //addItemsis a 'magic method' we get from Sequelize, once we declare an association
			await desertMenu.addItems(iceCream)
				await drinkMenu.addItems(beer)
					await drinkMenu.addItems(vodka)
						await drinkMenu.addItems(soda)
							await entreeMenu.addItems(pasta)
							await entreeMenu.addItems(burger)
									await startersMenu.addItems(nachos)

		
		const desertsOffers = await desertMenu.addItems() 
		const entreeOffers = await entreeMenu.addItems()
		const drinkOffers = await drinkMenu.addItems()
		const starterOffers = await startersMenu.addItems()
	
		 //another association 'magic method'

		expect(desertsOffers.length).toBe(2)
		
	expect(desertsOffers[2] instanceof Items).toBeTruthy

	})

	

})
