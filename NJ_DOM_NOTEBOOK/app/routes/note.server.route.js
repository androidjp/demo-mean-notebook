const express = require('express');
const noteController = require('../../app/controllers/note.server.controller');

module.exports = (app) => {
    const router = express.Router();

    router.route('/update')
        .post(noteController.saveNote);

    router.route('/find/:customerId')
        .get(noteController.getAllNote);

    router.route('/delete/:noteId')
        .delete(noteController.deleteNote);

    app.use('/api/note/', router);
};
