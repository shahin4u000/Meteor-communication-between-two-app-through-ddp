import { Meteor } from "meteor/meteor";
import { Notes } from "../lib/collection";

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("db1",function() {

    let currentUser = this.userId;
    console.log(currentUser);
    return Notes.find({});
  
    //return Notes.find({createdByUser:currentUser});
  
});

// Server
Meteor.publish('userData', function () {
  if (!this.userId) {   //publish users detail to app2 if they are not logged in as per required
   return Meteor.users.find({});
  }
  
});