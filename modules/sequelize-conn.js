const { Sequelize, Model } = require('sequelize')

const connect = {
	host: 'localhost',
	port: 3306,
	dialect: 'mysql',
	database: 'booldook',
	username: 'root',
	password: '000000',
	pool: {
		max: 10
	}
}
const sequelize = new Sequelize(connect)

module.exports = { Sequelize, Model, sequelize }