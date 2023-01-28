
const express = require('express');

const PORT = process.env.PORT || 3001;

const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use('/api/notes', require('./routes/apiRoutes'));

app.use('/', require('./routes/htmlRoutes'));





app.listen(PORT, () => console.log(`Server started on port ${PORT}`));







