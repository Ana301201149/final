const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/user')

.then (db=> console.log('DATABASE IS CONNECTED'))
.catch (err => console.log (err));