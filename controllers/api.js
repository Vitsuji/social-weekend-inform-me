const express = require('express');

module.exports = (
    categoryService,
    foundService,
    lostService,
    userService,
) => {
    console.log('api');
    const router = express.Router();

    const categoryController = require('./category')(categoryService);
    const foundController = require('./found')(foundService);
    const lostController = require('./lost')(lostService);
    const userstiesController = require('./user')(userService);

    router.use('/category', categoryController);
    router.use('/found', foundController);
    router.use('/lost', lostController);
    router.use('/users', userstiesController);

    return router;
}