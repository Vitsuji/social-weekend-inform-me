const CrudController = require('./crud');
const express = require('express');

class LostController extends CrudController {
    constructor(lostService) {
        super(lostService);

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);

        this.routes['/create'] = [{ method: 'put', cb: this.create }];
        this.routes['/update'] = [{ method: 'post', cb: this.update }];

        this.registerRoutes();
    }  

    async create(req, res) {
        const lost = await this.service.create(req.body);
        res.json(lost);
    }

    async update(req, res) {
        const lost = await this.service.update(req.body);
        res.json(lost);
    }

    async bindUser(req, res) {
        await this.service.bindUser(req.body.lostId, req.body.userId);
        res.json({ success: true });
    }

    async bindCategory(req, res) {
        await this.service.bindCategory(req.body.lostId, req.body.categoryId);
        res.json({ success: true });
    }
}

module.exports = (lostService) => {
    const controller = new LostController(lostService);

    return controller.router;
}