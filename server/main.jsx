import { Meteor } from 'meteor/meteor';
import { SomeCollection } from '../api/some_api';


Meteor.startup(() =>
{
    // code to run on the server at startup
    // can NOT use a fat arrow, which wouldn't let us do this.userid
    Meteor.publish('someCollection', function()
    {
        return SomeCollection.find( { owner: this.userId } );
    });

});