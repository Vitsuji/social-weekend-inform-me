const CrudService = require('./crud');
const Promise = require('bluebird');

class LostService extends CrudService {

    constructor(lostRepository) { 
        super(lostRepository);
    }    

    async create(data) {
        console.log(data);
        let lost = {
            when: new Date(),
            where: data.where,
            description: data.description
        }

        return super.create(lost);
    }

    async update(data) {
        let lost = {
            when: data.when,
            where: data.where,
            comment: data.comment
        }

        return super.update(data.id, lost);
    }    

    async bindUser(lostId, userId) {
        const [ lost, user ] = await Promise.all([
            this.repository.findById(lostId),
            this.userRepository.findById(userId)
        ]);

        if(!lost || !user) {
            throw new Error(this.errors.invalidId);
        }

        await user.addLost(lost);
    }
    
    async bindCategory(lostId, categoryId) {
        const [ lost, category ] = await Promise.all([
            this.repository.findById(categoryId),
            this.userRepository.findById(userId)
        ]);

        if(!lost || !category) {
            throw new Error(this.errors.invalidId);
        }

        await category.addLost(lost);
    }
}

module.exports = LostService;