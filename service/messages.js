const messagesRu = require('./../translations/ru.json');
const messagesEn = require('./../translations/en.json');

exports.getMessage = (msg, text) => {
    return (msg.from.language_code.match(/ru/)) ? messagesRu[text] : messagesEn[text];    
}