module.exports = (bot, replyMarkupsService, messagesService) => {
    bot.onText(/\/start/, function(msg) {
        const fromId = msg.from.id,
              response = messagesService.getMessage(msg, 'welcome'),        
              replyMarkup = replyMarkupsService.getMarkup('default', msg);
        const options = {            
            reply_markup: replyMarkup
        };    

        bot.sendMessage(fromId, response, options).catch((error) => {
            console.log(error.response.body);
        });
    });
} 