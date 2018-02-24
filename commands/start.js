const messages = require('./../messages.json');

module.exports = (bot, replyMarkupsService) => {
    bot.onText(/\/start/, function(msg) {
        const fromId = msg.from.id,
              response = messages.message.welcome,        
              replyMarkup = replyMarkupsService.getMarkup('default');
        const options = {            
            reply_markup: replyMarkup
        };    

        bot.sendMessage(fromId, response, options).catch((error) => {
            console.log(error.response.body);
        });
    });
} 