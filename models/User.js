const User = (sequelize, Sequelize) => {
	return sequelize.define('User', {
		userid: {
			type: Sequelize.STRING(24),
			allowNull: false,
			unique: true
		},
		userpw: {
			type: Sequelize.STRING(255),
		},
		username: {
			type: Sequelize.STRING(255),
		},
		email: {
			type: Sequelize.STRING(255),
		}
	}, {
		timestamps: true,
		charset: 'utf8',
		tableName: 'seq-users'
	})
}

module.exports = User