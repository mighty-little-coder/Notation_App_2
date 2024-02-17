const router = require("express").Router();
const notes = require('../../db/notesDb.json');
const { createNewNote, deleteNote, readFromFile, readAndAppend, uuid } = require('../../lib/utilFunctions');

// router.get('/notes', (req, res) => {
//     res.render('notes');
// })

// router.post('/notes', (req, res) => {
//     req.body.id = notes.length.toString();
//     let note = createNewNote(req.body, notes);
//     res.json(note);
// })

// router.delete('/notes/:id', (req, res) => {
//     deleteNote(notes, req.params.id);
//     res.json(notes);
// })

router.get('/notes', (req, res) => {
    readFromFile(notes, '../../db/notesDb.json');
    res.json(notes);
}
);

router.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, '../../db/notesDb.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
}
);

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
}
);

router.post('/notes', (req, res) => {
    createNewNote(req.body, notes);
    res.json(notes);
}
);

module.exports = router;