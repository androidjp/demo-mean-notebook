const _ = require('lodash');
const noteService = require('../services/note.server.service.js');

module.exports = {
    saveNote:saveNote,
    getAllNote:getAllNote
}

//save note
function saveNote(req, res, next){
    var body = req.body;
    if(_.isNull(body)){
        return next(new Error('The note is empty'), req, res);        
    }

    noteService.saveNote(body,function(err, result){
        if(err){
            return next(err, req, res);
        }
        return res.json(result);
    });
}

// get all note
function getAllNote(req, res, next){
    var body = req.params;
    if(_.isEmpty(body) || _.isEmpty(body.customerId)){
        return next(new Error('The customerId is empty'), req, res);        
    }

    noteService.getNoteListByCustomerId(body.customerId,function(err, result){
        if(err){
            return next(err, req, res);
        }
        return res.json(result);
    });
}

