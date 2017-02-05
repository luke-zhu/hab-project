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

  'taobao-url': keywordVar => {
    const res = HTTP.get('https://world.taobao.com/search/search.htm?&_input_charset=utf-8&q=' + keywordVar);
    return res;
  },

  'alibaba-url': keywordVar => {
    const res = HTTP.get('https://www.alibaba.com/trade/search?fsb=y&SearchText=' + keywordVar);
    return res;
  },

  'jd-url': keywordVar => {
    const res = HTTP.get(`http://search.jd.com/Search?keyword=
      ${keywordVar}&enc=utf-8`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'
        }
      });
    return res.content;
  },
});
