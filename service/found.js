const CrudService = require('./crud');
const Promise = require('bluebird');

class FoundService extends CrudService {

    constructor(foundRepository) { 
        super(foundRepository);
    }    

    async create(data) {
        
        let found = {
            when: new Date(),
            where: data.where,
            comment: data.comment,
            userId: data.user_id
        }
        console.log(found);
        return super.create(found);
    }

    async update(data) {
        let found = {
            when: data.when,
            where: data.where,
            comment: data.comment
        }

        return super.update(data.id, found);        
    }    

    async bindUser(foundId, userId) {
        const [ found, user ] = await Promise.all([
            this.repository.findById(foundId),
            this.userRepository.findById(userId)
        ]);

        if(!found || !user) {
            throw new Error(this.errors.invalidId);
        }

        await user.addFound(found);
    }
    
    async bindCategory(foundId, categoryId) {
        const [ found, category ] = await Promise.all([
            this.repository.findById(categoryId),
            this.userRepository.findById(userId)
        ]);

        if(!found || !category) {
            throw new Error(this.errors.invalidId);
        }

        await category.addFound(found);
    }
}

module.exports = FoundService;