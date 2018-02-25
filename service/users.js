const CrudService = require('./crud');
const Promise = require('bluebird');

class UserService extends CrudService {

    constructor(userRepository) { 
        super(userRepository);
    }    

    async create(data) {
        console.log(data);
        let user = {
            user_id: data.user_id,
        }

        return super.create(user);
    }

    async update(data) {
        let user = {
            user_id: data.user_id,
        }

        return super.update(data.id, user);
    }    
}

module.exports = UserService;