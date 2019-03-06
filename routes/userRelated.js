const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bookmark = require('../models/bookmark');
const User = require('../models/user');

router.post('/auth',(req,res)=>{
	User.findOne({username:req.body.name,password:req.body.pass},(err,user)=>{
		if (user == null) 
			res.send('No');
		else
			res.send('Yes');
	});
});

router.post('/addUser',(req,res)=>{
	var user = new User({username:req.body.name,password:req.body.pass,status:'active'});
	user.save((err,user)=>{
		if (err) throw err;
		if (user != null)
			res.send('User added');
		else
			res.send('User not added');
	});
})

router.post('/doesUserExist',(req,res)=>{
	User.findOne({username:req.body.name},(err,user)=>{
		if (user == null)
			res.send('No');
		else
			res.send('Yes');
	})
})

router.post('/activateUser',(req,res)=>{
	User.findOneAndUpdate({username:req.body.name},{status:'active'},()=>console.log(req.body.name+" "+"Activated"));
})

router.post('/logUserOut',(req,res)=>{
	User.findOneAndUpdate({username:req.body.name},{status:'inactive'},()=>console.log(req.body.name+" "+"Deactivated"));
})

router.get('/getActiveUser',(req,res)=>{
	User.findOne({status:'active'},(err,user)=>{
		if (user == null)
			res.send('No Active User');
		else
			res.send(user.username);
	})
})

router.get('/show',(req,res)=>{
	Bookmark.find({},(err,bkmks)=>{
		console.log(bkmks);
	})
})

module.exports = router