const message = require('../model/message');

module.exports = {

    create: function (req,res,next) {
        
        let countRows = message.list().length; // set num rows
        let data = '';

        console.log('Total rows ' + countRows);

        if(!req.body.message) {
            res.status(500).json({msg: 'empty data'});
        }
        
        countRows++;

        message.create({
            "index":countRows,
            "message":req.body.message
        });

        //search message
        data = message.search(countRows);
        
        return res.status(200).json({msg: data});
    },

    list: function(req, res) {

        if(!message.list()) {

            res.status(200).json({ msg: 'not data yet'});

        }

        res.status(200).json({ data: message.list()});

    }

}