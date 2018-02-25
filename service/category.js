const CrudService = require('./crud');
const Promise = require('bluebird');

class CategoryService extends CrudService {

    constructor(categoryRepository, userRepository, lostRepository, foundRepository) { 
        super(categoryRepository);

        this.userRepository = userRepository;
        this.lostRepository = lostRepository;
        this.foundRepository = foundRepository;
    }    

    async create(data) {
        console.log(data);
        let user = {
            type: data.type,
        }

        return super.create(user);
    }

    async update(data) {
        let user = {
            type: data.type,
        }

        return super.update(data.id, user);
    }    

    // async bindUser(categoryId, userId) {
    //     const [ category, user ] = await Promise.all([
    //         this.repository.findById(categoryId),
    //         this.userRepository.findById(userId)
    //     ]);

    //     if(!category || !user) {
    //         throw new Error(this.errors.invalidId);
    //     }

    //     await user.addCategory(category);
    // }

    // async bindLost(categoryId, foundId) {
    //     const [ category, found ] = await Promise.all([
    //         this.repository.findById(categoryId),
    //         this.foundRepository.findById(foundId)
    //     ]);

    //     if(!category || !found) {
    //         throw new Error(this.errors.invalidId);
    //     }

    //     await found.addCategory(category);
    // }

    // async bindUser(categoryId, userId) {
    //     const [ category, user ] = await Promise.all([
    //         this.repository.findById(categoryId),
    //         this.userRepository.findById(userId)
    //     ]);

    //     if(!category || !user) {
    //         throw new Error(this.errors.invalidId);
    //     }

    //     await user.addCategory(category);
    // }
}

module.exports = CategoryService;