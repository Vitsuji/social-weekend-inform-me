const markups = {
    "default": {
        keyboard: [
            [ { text: 'Lost 😞' }, { text: 'Found 😉'} ]
        ],               
        resize_keyboard: true
    },
    "categories": {
            inline_keyboard: [
                [{ text: 'Human', callback_data: 'Human' }],
                [{ text: 'Animal', callback_data: 'Animal' }],
                [{ text: 'Object', callback_data: 'Object' }],
                [{ text: 'Other', callback_data: 'Other' }],

              ],              
        resize_keyboard: true
    }
}


exports.getMarkup = function (markupName) {
    if(!markups[markupName]) throw new Error(`Cannot find ${markupName} markup.`);
    return markups[markupName];
}