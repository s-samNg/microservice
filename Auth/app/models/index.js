const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{ ssl : process.env.MONGO_SSL }) 
.then(() => console.log('MongoDB connected !')) 
.catch(() => console.log('Erreur with MongoDB connection'));