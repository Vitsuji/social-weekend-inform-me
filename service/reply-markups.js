const markups = {
    "default": {
        keyboard: [
            [ { text: 'Test 🔍' }, { text: 'hello'} ],
            [ { text: 'Test 1' }, { text: 'Test 2' } ],
        ],               
        resize_keyboard: true
    }
}


exports.getMarkup = function (markupName) {
    if(!markups[markupName]) throw new Error(`Cannot find ${markupName} markup.`);
    return markups[markupName];
}