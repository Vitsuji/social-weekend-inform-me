module.exports = (Sequelize, sequelize) => {
	return sequelize.define("found", {
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
			
		}
	});
};