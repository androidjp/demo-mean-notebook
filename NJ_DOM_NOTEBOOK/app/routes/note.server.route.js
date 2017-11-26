const express = require('express');
const noteController = require('../../app/controllers/note.server.controller');

module.exports = (app) => {
    const router = express.Router();

    router.route('/update')
        .post(noteController.saveNote);

    router.route('/list/user/:customerId/:page')
        .get(noteController.getAllNoteByCustomerId);

    router.route('/get/:noteId')
        .get(noteController.getNoteDetail);


    router.route('/list/date/:page')
        .get(noteController.getAllNote);

    router.route('/delete/:noteId')
        .delete(noteController.deleteNote);

    app.use('/api/note/', router);
};
