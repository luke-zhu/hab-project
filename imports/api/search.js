import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.methods({
  'search.filterTitle': (title) => {
    const words = title.split(' ');
    const unique = words.filter((e, i) => i === words.indexOf(e));
    return unique.join(' ');
  },
  'translate-chinese-simplified': title => {
    const res = HTTP.get(`https://translation.googleapis.com/language/translate/v2?` +
      `key=AIzaSyAC9KPfoCNFabOyuwW80O7NLeegBlQWIaw&source=en&target=zh&q=${title}`);
    return res;
  },
});
