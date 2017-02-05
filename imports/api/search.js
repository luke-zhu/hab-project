import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.methods({
  'search.filterTitle': (title) => {
    const words = title.split(' ');
    const unique = words.filter((e, i) => i === words.indexOf(e));
    return 
  },
});
