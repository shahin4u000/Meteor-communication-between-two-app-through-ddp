import { Template } from 'meteor/templating'
import { Mongo } from 'meteor/mongo'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { DDP } from 'meteor/ddp-client'
import './main.html'



let conn = DDP.connect('http://localhost:3000/')
Notes = new Mongo.Collection('notes', conn)

Template.body.onCreated(function bodyOnCreated () {
  conn.subscribe('db1')
})
Template.body.helpers({
  notes () {
    return Notes.find({})
  }
})



/*
 let conn = DDP.connect('http://localhost:3000/')


Notes = new Mongo.Collection('notes', conn)
userData = new Mongo.Collection('userData')
/* DDP.loginWithPassword(conn, email,password, function (error) {
	console.log(email,password)
	if (!error) {
	  console.log("Logged in!");
	  conn.call('methodTheRequiresBeingLoggedIn', function () {
	    Template.body.onCreated(function bodyOnCreated () {
				conn.subscribe('db1')
			})
			Template.body.helpers({
				notes () {
					return Notes.find({ })
				}
			})
	  });
	} else {
	  console.log(error);
	}
});
 

Template.body.onCreated(function bodyOnCreated () {
	
	conn.subscribe('db1',Notes)
})
Template.body.helpers({
	notes () {
		return Notes.find({ })
	}
}) */