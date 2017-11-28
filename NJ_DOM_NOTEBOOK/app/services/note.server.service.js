const _ = require('lodash');
const noteFacade = require('../facade/note.server.facade');


module.exports = {
    getNoteListByCustomerId: getNoteListByCustomerId,
    getNoteListSortByCreateTime:getNoteListSortByCreateTime,
    saveNote: saveNote,
    searchNote: searchNote,
    deleteNote: deleteNote,
    saveNoteToFile: saveNoteToFile,
    getNoteDetail:getNoteDetail
}



function getNoteListByCustomerId(customerId , page , callback) {
    noteFacade.getNoteListByCustomerId(customerId,page,  callback);
}

function getNoteListSortByCreateTime(page , callback){
    noteFacade.getNoteListSortByCreateTime(page, callback);
}

function searchNote(customerId, title, callback) {
    noteFacade.getNoteListByTitle(customerId, title, callback);
}


function deleteNote(noteId, callback) {
    noteFacade.deleteNote(noteId, callback);
}

function saveNote(note, callback) {
    if (_.isUndefined(note.noteId) || _.isNull(note.noteId) || _.isEmpty(note.noteId)) {
        noteFacade.addNote(note, callback);
    } else {
        noteFacade.updateNote(note, callback);
    }
}

function saveNoteToFile(noteId, callback) {

}

function getNoteDetail(noteId, callback){
    noteFacade.getNoteById(noteId, callback);
}