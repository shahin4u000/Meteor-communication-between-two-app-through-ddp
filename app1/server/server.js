import { Meteor } from "meteor/meteor";
import { Notes } from "../lib/collection";
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("db1", function task() {
  return Notes.find({});
});