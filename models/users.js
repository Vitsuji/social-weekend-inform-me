module.exports = (Sequelize, sequelize) => {
	return sequelize.define("user", {
		id: {
			primaryKey: true,
			type: Sequelize.INTEGER,
			autoIncrement: true
		},
		user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        types: {
            type: Sequelize.INTEGER
        }
	});
};