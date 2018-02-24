const messages = require('./../messages.json');

module.exports = (bot, replyMarkupsService) => {
    bot.onText(/\/help/, function(msg) {
        const { chat: { id, first_name }} = msg,
              response = `Hello ${first_name}.\n${messages.message.help}`,        
              replyMarkup = replyMarkupsService.getMarkup('default');
        const options = {            
            reply_markup: replyMarkup
        };    

        bot.sendMessage(id, response, options).catch((error) => {
            console.log(error.response.body);
        });
    });
} 