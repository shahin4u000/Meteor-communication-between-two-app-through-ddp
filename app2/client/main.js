import { Template } from 'meteor/templating'
import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { DDP } from 'meteor/ddp-client'
import './main.html'


let conn = DDP.connect('http://localhost:3000/')

usersData = new Mongo.Collection('userData',conn);
Notes = new Mongo.Collection('notes', conn)
Template.body.onCreated(function bodyOnCreated () {
	
  conn.subscribe('userData');
	conn.subscribe('db1')
})
Template.body.helpers({
	notes () {
		return Notes.find({ })
	}
}) 

/* let conn = DDP.connect('http://localhost:3000/')
Notes = new Mongo.Collection('notes', conn);
usersData = new Mongo.Collection('userData',conn);
Template.body.onCreated(function bodyOnCreated () {
  conn.subscribe('db1');
  conn.subscribe('userData');
})
Template.body.helpers({
  notes () {
    return Notes.find({})
  } 
}) */





/* DDP.loginWithPassword(conn, {
	email: 'kazi1@gmail.com'
}, password, function(error) {
	if (!error) {
			console.log(username + " is logged in!");
	} else {
			console.log(error);
	}
}); */
 

