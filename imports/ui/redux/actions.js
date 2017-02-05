import { Meteor } from 'meteor/meteor';
import htmlparser from 'htmlparser2';

const findCN = text => (
  (dispatch) => {
    console.log(encodeURI(text));
    Meteor.call('jd-url', encodeURI(text), (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        let el = document.createElement( 'html' );
        el.innerHTML = result.content;
        console.log(el.getElementsByTagName('strong'));
      }
    });
  }
);

export const search = query => (
  (dispatch) => (
    Meteor.call('translate-chinese-simplified', query, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        dispatch(findCN(result.data.data.translations[0].translatedText));
      }
    }
  )
));
