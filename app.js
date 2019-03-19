const express = require('express');
const mongoose = require('mongoose');
const Bookmark = require('./models/bookmark')
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express()
var routes = require('./routes/userRelated');
var bookRoutes = require('./routes/bookmarkRelated');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://thomas:st654321@cluster0-8krio.mongodb.net/test?retryWrites=true',(err)=>{
	if (err) throw err;
	console.log('successful connection');
});


app.use('/user',routes);
app.use('/bookmark',bookRoutes);

app.listen(process.env.PORT||8000,()=>console.log('server running'));