module.exports = (Sequelize, sequelize) => {
	return sequelize.define("category", {
		id: {
			primaryKey: true,
			type: Sequelize.INTEGER,
			autoIncrement: true
		},
		type: {
			type: Sequelize.STRING,
			allowNull: false
        }
	});
};