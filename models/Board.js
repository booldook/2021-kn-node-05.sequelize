const Board = (sequelize, Sequelize) => {
	return sequelize.define('Board', {
		title: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		writer: {
			type: Sequelize.STRING(255),
		},
		content: {
			type: Sequelize.TEXT(),
		}/* ,
		age: {
			type: Sequelize.INTEGER.UNSIGNED.ZEROFILL
		} */
	}, {
		timestamps: true,
		charset: 'utf8',
		tableName: 'boards'
	})
}

module.exports = Board