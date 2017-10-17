const _ = require('lodash');
const noteFacade = require('../facade/note.server.facade');


module.exports = {
    getNoteListByCustomerId : getNoteListByCustomerId,
    saveNote: saveNote,
    searchNote: searchNote,
    deleteNote: deleteNote,
    saveNoteToFile:saveNoteToFile
}

function getNoteListByCustomerId(customerId, callback){
    noteFacade.getNoteListByCustomerId(customerId , callback);
}

function searchNote(customerId, title, callback){
    noteFacade.getNoteListByTitle(customerId, title, callback);
}


function deleteNote(noteId, callback){
    noteFacade.deleteNote(noteId, callback);
}

function saveNote(note, callback){
    noteFacade.updateNote(note, callback);
}

function saveNoteToFile(noteId,callback){

}


