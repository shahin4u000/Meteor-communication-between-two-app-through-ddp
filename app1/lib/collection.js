import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
SimpleSchema.extendOptions(["autoform"]);


export const Notes = new Mongo.Collection("notes");
Notes.allow({
  insert: function(userId, doc) {
    
    return !! userId; 
  },
  update: function(userId, doc) {
    return !! userId; 
  },
  remove: function(userID, doc) {
    return doc.submittedById === Meteor.userId();
  }
});

Notes.schema = new SimpleSchema({
  fName: {
    label: "First Name",
    type: String
  },
  lName: {
    label: "Last Name",
    type: String
  },
  email: {
    label: "E-mail",
    type: String
  },
  hobby: {
    label:"Your Hobby",
    type:"textarea"
  }
  
});
Notes.attachSchema(Notes.schema);
Meteor.methods({
  /*  inputs: (name, birthDate) => {
    if (!Meteor.user()) {
      throw Meteor.Error("Logged in");
    }
    Notes.insert({
      name: name,
      birthDate: birthDate,
      createdAt: new Date()
    });
  },
  removeTask: instence => {
    return Notes.remove(instence);
  } */
});
