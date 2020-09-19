
var messageArray = [];

module.exports = {
    
    create: function(message) {
        
        if(message == ''){
            return false;
        }

        return messageArray.push(message);

    },

    list: function() {

        return messageArray;

    },

    search: function(index) {
        
        if(typeof messageArray[index-1] === 'undefined') {
            return false;
        }

        return messageArray[index-1];

    }

};
