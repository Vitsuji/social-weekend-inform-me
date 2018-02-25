const CrudController = require('./crud');
const express = require('express');

class FoundController extends CrudController {
    constructor(foundService) {
        super(foundService);

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.bindUser = this.bindUser.bind(this);
        this.bindCategory = this.bindCategory.bind(this);

        this.routes['/create'] = [{ method: 'put', cb: this.create }];
        this.routes['/update'] = [{ method: 'post', cb: this.update }];
        this.routes['/bind-user'] = [{ method: 'post', cb: this.update }];
        this.routes['/bind-category'] = [{ method: 'post', cb: this.update }];

        this.registerRoutes();
    }  

    async create(req, res) {
        const found = await this.service.create(req.body);
        res.json(found);
    }

    async bindUser(req, res) {
        await this.service.bindUser(req.body.foundId, req.body.userId);
        res.json({ success: true });
    }

    async bindCategory(req, res) {
        await this.service.bindCategory(req.body.foundId, req.body.categoryId);
        res.json({ success: true });
    }
}

module.exports = (foundService) => {
    const controller = new FoundController(foundService);

    return controller.router;
}