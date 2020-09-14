const jwt = require('jsonwebtoken');
const Crypto = require('crypto');

module.exports = {

    generateSecretKey: function(size) {
        
        return Crypto
            .randomBytes(size)
            .toString('base64')
            .slice(0, size)
        ;

    },

    generateTokenCreateMessage: function(secretKey){

        // console.log(secretKey);

        if(!secretKey) {
            return false;
        }

        const token = jwt.sign({nameService: 'create'},secretKey,{expiresIn:'7d'});

        return token;
    },
    generateTokenMessageList: function(secretKey){

        // console.log(secretKey);

        if(!secretKey) {
            return false;
        }

        const token = jwt.sign({nameService: 'list'},secretKey,{expiresIn:'7d'});

        return token;
    },
    validateToken: function(token,secretKey) {
        let result = false;
        try {

            let decoded = jwt.verify(token, secretKey);
           
            console.log(decoded)

            if( decoded.nameService &&  decoded.nameService == 'create' ){
                result = true;
            }else {
                decoded.nameService &&  decoded.nameService == 'list'
            }

        } catch(err) {
           
            if(err){
                console.log(err.message);
                result = false;
           }
        }
        
        return result;
    }

}
