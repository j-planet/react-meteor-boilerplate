import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// on the server side: sets up a MongoDB collection;
// on the client side: creates a cache connected to the server collection
export const SomeCollection = new Mongo.Collection('someCollection');


Meteor.methods({
   'someCollection.insert'(text)
   {
       check(text, String);

       // make sure the currentUser is logged in before inserting
       if (!this.userId) throw new Meteor.Error('not-authorized');

       SomeCollection.insert({
           text,
           createdAt: new Date(),
           owner: this.userId,
           username: Meteor.users.findOne(this.userId).username
       });
   },

    'someCollection.remove'(id)
    {
        check(id, String);

        SomeCollection.remove(id);
    },

});