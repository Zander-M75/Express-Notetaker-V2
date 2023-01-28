
const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//this is really /api/notes
router.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = req.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

router.delete("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNotes = notes.filter((note) => note.id !== req.params.id);
        fs.writeFile("./db/db.json", JSON.stringify(newNotes), (err) => {
            if (err) throw err;
            res.json(newNotes);
        });
    });
});







module.exports = router;