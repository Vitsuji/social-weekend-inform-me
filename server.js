const express = require('express');
const bodyParser = require('body-parser');
const requireAll = require('require-all');
const TelegramBot = require('node-telegram-bot-api');
const config = require('config');

const replyMarkupsService = require('./service/reply-markups');
const BOT_COMMANDS = requireAll({dirname: `${__dirname}/commands`});
const TOKEN = process.env.TELEGRAM_TOKEN || config.get('token');
const bot = new TelegramBot(TOKEN);
const url = process.env.BOT_URL || config.get('url');

module.exports = () => {
    bot.setWebHook(`${url}/bot${TOKEN}`);
    Object.keys(BOT_COMMANDS).forEach(command => BOT_COMMANDS[command](bot, replyMarkupsService));

    const app = express();

    app.use(express.static('public'));
    app.use(bodyParser.json());

    
    app.post(`/bot${TOKEN}`, (req, res) => {        
        bot.processUpdate(req.body);
        res.sendStatus(200);
    });  

    bot.onText(/hello/, (msg) => {
        const { chat: { id, first_name, last_name }} = msg;
        bot.sendMessage(id, `Hello ${first_name} ${last_name}!`).catch((error) => {
            console.log(error.response.body);
        });
    });

    return app;
}