const { getMessage } = require('./messages');
let markups;

function setKeyboard(msg) {
    markups = {
        "default": {
            keyboard: [
                [ { text: getMessage(msg, 'btn_lost') }, { text: getMessage(msg, 'btn_found')} ],
                [ { text: getMessage(msg, 'btn_menu') }]
            ],               
            resize_keyboard: true
        },
        "categories": {
                inline_keyboard: [
                    [{ text: getMessage(msg, 'btn_cat_human'), callback_data: 'cat-human' }],
                    [{ text: getMessage(msg, 'btn_cat_animal'), callback_data: 'cat-animal' }],
                    [{ text: getMessage(msg, 'btn_cat_object'), callback_data: 'cat-object' }],
                    [{ text: getMessage(msg, 'btn_cat_other'), callback_data: 'cat-other' }],                
    
                  ],              
            resize_keyboard: true
        },
        "calendar": {
            inline_keyboard: [
                [{ text: getMessage(msg, 'btn_calendar'), callback_data: 'calendar' }]
              ],              
        resize_keyboard: true
        }
    }
};


exports.getMarkup = function (markupName, msg) {
    setKeyboard(msg);
    if(!markups[markupName]) throw new Error(`Cannot find ${markupName} markup.`);
    return markups[markupName];
}