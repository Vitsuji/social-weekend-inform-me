const express = require('express');
const bodyParser = require('body-parser');
const requireAll = require('require-all');
const TelegramBot = require('node-telegram-bot-api');
const config = require('config');

const replyMarkupsService = require('./service/reply-markups');
const messagesService = require('./service/messages');
const BOT_COMMANDS = requireAll({dirname: `${__dirname}/commands`});
const TOKEN = process.env.TELEGRAM_TOKEN || config.get('token');
const bot = new TelegramBot(TOKEN);
const url = process.env.BOT_URL || config.get('url');

const UserService = require('./service/users');
const CategoryService = require('./service/category');
const FoundService = require('./service/found');
const LostService = require('./service/lost');


module.exports = (db) => {

    // Services
    const userService = new UserService(db.Users);
    const categoryService = new CategoryService(db.Categories, db.Users, db.Lost, db.Found);
    const foundService = new FoundService(db.Found);
    const lostService = new LostService(db.Lost);

    // Controllers
    const apiController = require('./controllers/api')(
        categoryService,
        foundService,
        lostService,
        userService
    );  


    bot.setWebHook(`${url}/bot${TOKEN}`);
    Object.keys(BOT_COMMANDS).forEach(command => BOT_COMMANDS[command](bot, replyMarkupsService, messagesService));

    const app = express();

    app.use(express.static('public'));
    app.use(bodyParser.json());

    app.use('/api', apiController);

    app.post(`/bot${TOKEN}`, (req, res) => {        
        bot.processUpdate(req.body);
        res.sendStatus(200);
    });  

      
    bot.on("callback_query", (query) => {
        console.log(query.from);
        
        bot.answerCallbackQuery(query.id, messagesService.getMessage(query, 'alert_selected')).catch((error) => {
            console.log(error.response.body);
        });
    });
    const vkapi = new (require('node-vkapi'))();

    let timerId = setTimeout(async function updBtc() {        
        await vkapi.call('users.get', {
            user_ids: '1',
            fields:   'verified,sex'
          })
            .then(users => console.dir(users[0]))
            .catch(error => console.error(error));          
        //timerId = setTimeout(updBtc, 5000);
    }, 5000);


    return app;
}