const router = require('express').Router();
const path = require('path');
const htmlRoutes = require('./htmlRoutes')

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
}); 

router.use(htmlRoutes);

module.exports = router;