import { Meteor } from 'meteor/meteor';

export const openDialog = () => ({
  type: 'OPEN_DIALOG',
});

export const closeDialog = () => ({
  type: 'CLOSE_DIALOG',
});

export const updatePrice = item => ({
  type: 'UPDATE_PRICE',
  item,
});

export const toResults = () => ({
  type: 'TO_RESULTS',
});

export const toSearch = () => ({
  type: 'TO_SEARCH',
});

export const endLoading = () => ({
  type: 'END_LOADING',
});

const translateToEnglish = (text, index) => (
  (dispatch) => {
    Meteor.call('translate-english', encodeURI(text), (err, res) => {
      if (err) console.log(err);
      else {
        dispatch({
          type: 'TRANSLATE_TEXT',
          eng: res.data.data.translations[0].translatedText,
          index,
        });
      }
    });
  }
);

const findCN = text => (
  (dispatch) => {
    console.log(encodeURI(text));
    Meteor.call('jd-url', encodeURI(text), (error, result) => {
      if (error) {
        console.log(error);
      } else {
        try {
          const el = document.createElement('html');
          el.innerHTML = result;
          const elts = el.getElementsByTagName('strong');
          const imgs = el.getElementsByTagName('img');
          const titles = el.getElementsByTagName('em');

          const items = [];
          let i = 0;
          let count = 0;
          while (count < Math.min(10, imgs.length)) {
            if (elts[i].className[0] === 'J') {
              items.push(elts[i]);
              count += 1;
            }
            i += 1;
          }

          const finalImgs = [];
          i = 0;
          count = 0;
          while (count < Math.min(10, imgs.length)) {
            if (imgs[i].src !== '' && imgs[i].width === 220 && !imgs[i]['data-lazy-img']) {
              finalImgs.push(imgs[i]);
              count += 1;
            }
            i += 1;
          }

          const finalTitles = [];
          i = 0;
          count = 0;
          while (count < Math.min(10, imgs.length)) {
            if (titles[i].innerText.length > 1) {
              finalTitles.push(titles[i].innerText);
              count += 1;
            }
            i += 1;
          }

          finalTitles.forEach((e, index) => (
            dispatch(translateToEnglish(finalTitles[index], index))
          ));

          dispatch({
            type: 'FIND_ITEMS',
            text,
            items,
            finalImgs,
          });
        } catch (e) {
          console.error(e);
          dispatch(endLoading());
        }
      }
    });
  }
);

export const search = query => (
  dispatch => (
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
