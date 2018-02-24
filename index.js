const Sequelize = require('sequelize');

const server = require('./server')();

const port = process.env.PORT || 3000;

(async function () {

    // TODO: create db

    server.listen(port, () => console.log(`server listening at https://localhost:${port}`));    
})();