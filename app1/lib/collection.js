import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Notes = new Mongo.Collection("notes");

Meteor.methods({
  inputs: (name,birthDate) => {
    if (!Meteor.user()) {
      throw Meteor.Error("Logged in");
    }
    Notes.insert({
      name: name,
      birthDate:birthDate,
      createdAt: new Date()
    });
  },
  removeTask:(instence)=>{
    return Notes.remove(instence);
  }

});


