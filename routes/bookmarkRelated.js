const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bookmark = require('../models/bookmark');
const User = require('../models/user');


router.post('/addBookmark',(req,res)=>{
	var bookmark = new Bookmark({"bookmarkUrl":req.body.url,"bookmarkName":req.body.name,"username":req.body.user});
	bookmark.save((err,bookmark)=>{
		if (err) throw err;
		if (bookmark!=null)
			res.send('Bookmark Added Successfully');
		else
			res.send('Bookmark Not Added');
	})
})

router.post('/removeBookmark',(req,res)=>{
	Bookmark.deleteOne({bookmarkUrl:req.body.url,bookmarkName:req.body.name,username:req.body.user},
		(err)=>{
			if (err) throw err;
		}
	);
	res.send('removed');
})

router.post('/showBookmark',(req,res)=>{
	Bookmark.find({username:req.body.user},(err,marks)=>{
		res.send(marks);
	});
})

module.exports = router;