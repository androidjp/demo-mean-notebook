const _ = require('lodash');
const noteService = require('../services/note.server.service.js');

module.exports = {
    saveNote:saveNote,
    getAllNote:getAllNote,
    deleteNote: deleteNote
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


/// delete note
function deleteNote(req, res, next){
    var params = req.params;
    if(_.isNull(params) || _.isEmpty(params) || _.isUndefined(params.noteId) || _.isNull(params.noteId) || _.isEmpty(params.noteId)){
        return next(new Error('The customerId is empty'), req, res);
    }

    noteService.deleteNote(params.noteId, function(err, result){
        if(err){
            return next(err, req, res);
        }
        return res.json(result);
    });
}

