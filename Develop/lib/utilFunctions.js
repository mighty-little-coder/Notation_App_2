const fs = require("fs");
const path = require("path");


function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/notesDb.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )

    return note;
}

function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    // This loop re-writes the indexes for the remaining notes.
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/notesDb.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
}

function readFromFile() {
    return fs.readFileSync(path.join(__dirname, '../db/notesDb.json'), 'utf8');
}

function readAndAppend() {
    return fs.readFileSync(path.join(__dirname, '../db/notesDb.json'), 'utf8');
}

function uuid() {
    return fs.readFileSync(path.join(__dirname, '../db/notesDb.json'), 'utf8');
}

module.exports = {
    createNewNote,
    deleteNote,
    readFromFile,
    readAndAppend,
    uuid
};