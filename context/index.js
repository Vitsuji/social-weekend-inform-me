const config = require('config');

module.exports = (Sequelize) => {
    const sequelize = new Sequelize(
        config.get('db.database'),
        config.get('db.user'),
        config.get('db.password'),
        config.get('db.options')
    );

    const Categories = require('./../models/category')(Sequelize, sequelize);
    const Found = require('./../models/found')(Sequelize, sequelize);
    const Lost = require('./../models/lost')(Sequelize, sequelize);
    const Users = require('./../models/users')(Sequelize, sequelize);

    Users.hasMany(Found); 
    Users.hasMany(Lost);
    Categories.hasMany(Found);
    Categories.hasMany(Lost);

    return {
        Categories,
        Found,
        Lost,
        Users,

        sequelize,
        Sequelize,
    };
};