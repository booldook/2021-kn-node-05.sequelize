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
		}
	}, {
		timestamps: true,
		charset: 'utf8',
		tableName: 'boards'
	})
}

module.exports = Board