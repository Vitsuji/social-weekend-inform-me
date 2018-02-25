
module.exports = (bot, replyMarkupsService, messagesService) => {
    bot.onText(/Menu|Меню/, function(msg) {
        const fromId = msg.from.id,
              response = messagesService.getMessage(msg, 'menu'),        
              replyMarkup = replyMarkupsService.getMarkup('default', msg);
        const options = {            
            reply_markup: replyMarkup
        };    

        bot.sendMessage(fromId, response, options).catch((error) => {
            console.log(error.response.body);
        });
    });

    // bot.on("callback_query", (query) => {
    //     // 'callbackQuery' is of type CallbackQuery
    //     const options = {
    //         chat_id: query.message.chat.id,
    //         message_id: query.message.message_id,
    //         reply_markup: replyMarkupsService.getMarkup('categories', query)
    //     };

    //     console.log(options);

    //     console.log("callback_query");
    //     bot.editMessageReplyMarkup(options);
    //     bot.answerCallbackQuery(query.id).catch((error) => {
    //         console.log(error.response.body);
    //     });
    // });
} 