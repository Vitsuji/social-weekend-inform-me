class CrudService {
    constructor(repository) {
        this.repository = repository;
    }
    
    async read(id) {
        id = parseInt(id);
        
        if(isNaN(id)) {
            throw new Error('invalidId');
        }

        const item = await this.repository.findById(id, { raw: true });

        console.log(item);
        if(!item) {
            console.log('error');
            throw new Error('notFound');
        }

        return item;
    }

    async create(data) {
        const item = await this.repository.create(data);
        return item.get({ plain: true });
    }

    async update(id, data) {
        await this.repository.update(data, { 
            where: { id: id },
            limit: 1
        });

        return this.read(id);
    }

    async delete(id) {
        return this.repository.destroy({ where: { id: id } });
    }
}

module.exports = CrudService;