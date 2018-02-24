const messages = require('./../messages.json');

module.exports = (bot, replyMarkupsService, messagesService) => {
    bot.onText(/\/help/, function(msg) {
        const { chat: { id, first_name }} = msg,
              response = messagesService.getMessage(msg, 'help'),        
              replyMarkup = replyMarkupsService.getMarkup('default', msg);
        const options = {            
            reply_markup: replyMarkup
        };    

        bot.sendMessage(id, response, options).catch((error) => {
            console.log(error.response.body);
        });
    });
} 