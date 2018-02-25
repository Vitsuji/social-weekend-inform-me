const CrudController = require('./crud');
const express = require('express');

class UserController extends CrudController {
    constructor(userService) {
        super(userService);

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);

        this.routes['/create'] = [{ method: 'put', cb: this.create }];
        this.routes['/update'] = [{ method: 'post', cb: this.update }];
        console.log('create');
        this.registerRoutes();
    }  

    async create(req, res) {
        console.log('created');
        const user = await this.service.create(req.body);
        res.json(user);
    }

    async update(req, res) {
        const user = await this.service.update(req.body);
        res.json(user);
    }
}

module.exports = (userService) => {
    const controller = new UserController(userService);

    return controller.router;
}