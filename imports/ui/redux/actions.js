import { Meteor } from 'meteor/meteor';

const findCN = text => ({
  type: 'FIND_CN',
  text,
});

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
