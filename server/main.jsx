import { Meteor } from 'meteor/meteor';

import { MAILGUN_URL } from './secrets';


Meteor.startup(() =>
{
    process.env.MAIL_URL = MAILGUN_URL;
});