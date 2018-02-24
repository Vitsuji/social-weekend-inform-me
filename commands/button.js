const messages = require('./../messages.json');

module.exports = (bot, replyMarkupsService) => {
    bot.onText(/Lost/, function(msg) {
        const { chat: { id, first_name }} = msg,
              response = `I'm sorry for the loss ${first_name} 😟.\n${messages.message.button_lost}`,        
              replyMarkup = replyMarkupsService.getMarkup('categories');
        const options = {            
            reply_markup: replyMarkup
        };    

        bot.sendMessage(id, response, options).catch((error) => {
            console.log(error.response.body);
        });
    });
} 