const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/apiRoutes/htmlRoutes');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3008;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now displaying at http://localhost:${PORT} 📝!`);
});