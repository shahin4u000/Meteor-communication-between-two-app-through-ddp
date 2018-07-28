import { Meteor } from "meteor/meteor";
import { Notes } from "../lib/collection";

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("db1",function() {

    let currentUser = this.userId;
    console.log(currentUser);

    return Notes.find({createdByUser:currentUser});
  
});

// Server
Meteor.publish('userData', function () {
  if (!this.userId) {
    return Meteor.users.find({ });
  } else {
    this.ready();
  }
});