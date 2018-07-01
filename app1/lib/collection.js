import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
SimpleSchema.extendOptions(["autoform"]);

// Required AutoForm setup
export const Notes = new Mongo.Collection("notes");
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
