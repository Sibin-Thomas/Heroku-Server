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


mongoose.connect('mongodb+srv://sibin:st654321@cluster0-n5hf2.mongodb.net/bookmarkdb?retryWrites=true',(err)=>{
	if (err) throw err;
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.get('/',(req,res)=>{
	res.send('enter');
})
app.use('/user',routes);
app.use('/bookmark',bookRoutes);

app.listen(process.env.PORT ||8000,()=>console.log('server running'));