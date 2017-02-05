import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.methods({
  'search.filterTitle': (title) => {
    const words = title.split(' ');
    const unique = words.filter((e, i) => i === words.indexOf(e));
    return
  },

  'translate-chinese-simplified': function(titleVar){
    const translate = require('google-translate-api');
    translate(titleVar, {to: 'zh-cn'}).then(res => {
      console.log(res.text);
    }).catch(err => {
      console.error(err);
    });
  },
});
