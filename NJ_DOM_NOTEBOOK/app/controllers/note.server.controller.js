const _ = require('lodash');
const noteService = require('../services/note.server.service.js');

module.exports = {
    saveNote:saveNote,
    getAllNote:getAllNote
}

//save note
function saveNote(req, res, next){
    var body = req.body;
    if(_.isEmpty(body)){
        return next(new Error('The note is empty'), req, res);        
    }
    var title = body.title;
    var content = body.content;
    var customerId = body.customerId;
    if(_.isEmpty(title)){
        return next(new Error('note title is empty'), req, res);
    }
    if(_.isEmpty(customerId)){
        return next(new Error('customerId is empty'), req, res);
    }

    noteService.saveNote(customerId,title,content,function(err, result){
        if(err){
            return next(err, req, res);
        }
        return res.json(result);
    });
}

// get all note
function getAllNote(req, res, next){
    var body = req.body;
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

