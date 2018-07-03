import { Template } from "meteor/templating";
import { Mongo } from "meteor/mongo";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { DDP } from "meteor/ddp-client";
import "./main.html";

let conn = DDP.connect("http://localhost:3000/");
Notes = new Mongo.Collection("notes", conn);

Template.body.onCreated(function bodyOnCreated() {
  conn.subscribe("db1");
});
Template.body.helpers({
  notes() {
    return Notes.find({});
  }
});
