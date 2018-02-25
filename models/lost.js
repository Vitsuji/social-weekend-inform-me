module.exports = (Sequelize, sequelize) => {
	return sequelize.define("lost", {
		id: {
			primaryKey: true,
			type: Sequelize.INTEGER,
			autoIncrement: true
        },        
		when: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		where: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		}
	});
};