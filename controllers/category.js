const CrudController = require('./crud');
const express = require('express');

class CategoryController extends CrudController {
    constructor(categoryService) {
        super(categoryService);

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);

        this.routes['/create'] = [{ method: 'put', cb: this.create }];
        this.routes['/update'] = [{ method: 'post', cb: this.update }];

        this.registerRoutes();
    }  

    async create(req, res) {
        const category = await this.service.create(req.body);
        res.json(category);
    }

    async update(req, res) {
        const category = await this.service.update(req.body);
        res.json(category);
    }
}

module.exports = (categoryService) => {
    const controller = new CategoryController(categoryService);

    return controller.router;
}