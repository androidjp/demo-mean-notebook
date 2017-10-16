'use strict'
const _ = require('lodash');
const fs = require('fs');
require('../models/note.model');
const mongoose = require('mongoose');

var noteModel = mongoose.model('Note');


module.exports={
    getNoteListByCustomerId : getNoteListByCustomerId,
    getNoteById: getNoteById,
    getNoteListByTitle:getNoteListByTitle,
    addNote: addNote,
    updateNote: updateNote,
    deleteNote:deleteNote
}

// get noteList
function getNoteListByCustomerId(customerId  , callback){
    if(_.isEmpty(customerId)){
        callback(new Error("The customerId should not be empty!",null));
        return;
    }
    noteModel.find({authorId:customerId}, function(err,notes){
        if(err){
            callback(err, null);
        }
         else callback(null,notes);
    });
}

// find note by id
function getNoteById(noteId, callback){
    if(_.isEmpty(noteId)){
        callback(new Error("The noteId should not be empty!",null));
        return;
    }

    noteModel.find({nodeId:nodeId}, function(err, note){
        if(err){
            callback(err, null);
        }else
            callback(null, note);
    });
}

/// find noteList by title
function getNoteListByTitle(customerId, title, callback){
    if(_.isEmpty(customerId)){
        callback(new Error("The customerId should not be empty!",null));
        return;
    }
    if(!_.isEmpty(title)){
        noteModel.find({$and:[{authorId:customerId} , {title:eval("/"+title+"/i")}]} ,function(err, notes){
            if(err){
                callback(err,null);
            }else
                callback(null, notes);
        });
    }else{
        noteModel.find({authorId:customerId} ,function(err, notes){
            if(err){
                callback(err,null);
            }else
                callback(null, notes);
        });
    }
}


// add note
function addNote(note , callback){
    if(_.isNull(note)){
        callback(new Error("The note should no be empty!"), null);
        return;
    }
    if(_.isEmpty(note.authorId)){
        callback(new Error("The authorId should no be empty!"), null);
        return;
    }
    if(_.isNull(note.title)){
        callback(new Error("The note title should no be empty!"), null);
        return;
    }
    if(_.isNull(note.cache)){
        callback(new Error("The note content should no be empty!"), null);
        return;
    }
    let noteInstance = new noteModel(note);
    noteInstance.save(function(err, doc){
        if(err){
            callback(err, null);
        }
        else {
            callback(null, doc);
        }
    });
}

// update note
function updateNote(note , callback){
    if(_.isNull(note)){
        callback(new Error("The note should no be empty!"), null);
        return;
    }
    if(_.isNull(note.title)){
        callback(new Error("The note title should no be empty!"), null);
        return;
    }
    if(_.isNull(note.cache)){
        callback(new Error("The note content should no be empty!"), null);
        return;
    }

    noteModel.update({noteId: note.noteId}, {$set: note},
        {upset: true}
        , function (err) {
            if (err) {
                callback(err);
                return;
            }
            callback(null);
        });
}


/// delete note
function deleteNote(noteId, callback) {
    if (_.isNull(noteId)) {
        callback(new Error("Remove note Error!"), null);
    }
    noteModel.remove(
        {noteId:noteId},
        function(err){
            if(err){
                callback(err, null);
            }
            else callback(null, "success delete address");
        }
    )
}