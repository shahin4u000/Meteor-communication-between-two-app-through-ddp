import { Template } from "meteor/templating";
import { Notes } from "../lib/collection";
import { Meteor } from "meteor/meteor";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// import { ReactiveDict } from 'meteor/reactive-dict';
import "./main.html";

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe("db1");
});

Template.body.helpers({
  notes() {
    return Notes.find({});
  }
});

Template.body.events({
  "click .delete": function() {
    Notes.remove(this._id);
  },

  "submit .formSubmit": function(event) {
    event.preventDefault();
    let target = event.target;
    let name = target.name.value;
    let birthDate = target.birthDate.value;

    Meteor.call("inputs", name,birthDate);

    target.name.value = "";
    target.birthDate.value = "";

    return false;
  },
  "click .userDetail": function() {
    if (confirm("Delete the user Detail ?")) {
      Meteor.call('removeTask',this._id)
    }
  }
});
