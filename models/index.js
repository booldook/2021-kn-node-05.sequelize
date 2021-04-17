const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const { Sequelize, Model, sequelize } = require('../modules/sequelize-conn')
const db = {}

fs.readdirSync(__dirname).filter(file => {
	return file !== basename && path.extname(file) === '.js'
}).forEach(file => {
	let model = require(path.join(__dirname, file))(sequelize, Sequelize)
	db[model.name] = model
})

// 각 테이블의 관계설정 initialize
Object.keys(db).forEach(name => { if(db[name].associate) db[name].associate(db) })

// 관계설정
db.User.hasMany(db.Board)
db.Board.belongsTo(db.User)


db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize.sync()	// Model의 schema들을 실제 table로 생성

module.exports = db