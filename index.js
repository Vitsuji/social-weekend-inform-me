const Sequelize = require('sequelize');


const db = require('./context')(Sequelize);
const server = require('./server')(db);

const port = process.env.PORT || 3000;

(async function () {

    await db.sequelize.sync({ force: false });

    server.listen(port, () => console.log(`server listening at https://localhost:${port}`));    
})();