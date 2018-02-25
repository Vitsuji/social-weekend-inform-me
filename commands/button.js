module.exports = (bot, replyMarkupsService, messagesService) => {
    let isReport = false;

    bot.onText(/Lost|Я потерял/, async function(msg) {
        isReport = true;
        const { chat: { id, first_name }} = msg;
        let response = `${messagesService.getMessage(msg, "button_lost_prev")} ${first_name} 😟.\n${messagesService.getMessage(msg, "button_lost")}`;
        let replyMarkup = replyMarkupsService.getMarkup('categories', msg);
        let options = {            
            reply_markup: replyMarkup
        };    

        await bot.sendMessage(id, response, options).catch((error) => {
            console.log(error.response.body);
        });
     
        response = `2️⃣ ${messagesService.getMessage(msg, "label_calendar")}`;
        replyMarkup = replyMarkupsService.getMarkup('calendar', msg);
        options = {            
            reply_markup: replyMarkup
        };  
        await bot.sendMessage(id, response, options).catch((error) => {
            console.log(error.response.body);
        });

        response = `3️⃣ ${messagesService.getMessage(msg, "label_location")}`;
        await bot.sendMessage(id, response).catch((error) => {
            console.log(error.response.body);
        });

    });

    bot.on('location', (msg) => {
        if (!isReport) return;
        bot.sendMessage(msg.chat.id, "We saved your point " + 
        [msg.location.longitude,msg.location.latitude].join(";")).catch((error) => {
            console.log(error.response.body);
        }).then(() => { isReport = false; }) ;  
    })
} 