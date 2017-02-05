const initialState = {
  isSearching: true,
  text: '',
  items: [],
  images: [],
  titles: ['', '', '', '', '', '', '', '', '', ''],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_ITEMS':
      return Object.assign({}, state, {
        text: action.text,
        items: action.items,
        images: action.finalImgs,
      });
    case 'TRANSLATE_TEXT':
      return Object.assign({}, state, {
        titles: state.titles.map((e, i) => {
          if (i === action.index) {
            return action.eng;
          }
          return e;
        }),
      });
    case 'UPDATE_PRICE':
      return Object.assign({}, state, {
        price: parseFloat(action.item.textContent.substring(1)) * 0.15,
      });
    case 'TO_SEARCH':
      return Object.assign({}, state, {
        isSearching: true,
      });
    case 'TO_RESULTS':
      return Object.assign({}, state, {
        isSearching: false,
      });
    case 'OPEN_DIALOG':
      return Object.assign({}, state, {
        isOpen: true,
      });
    case 'CLOSE_DIALOG':
      return Object.assign({}, state, {
        isOpen: false,
      });
    default:
      return state;
  }
};

export default reducers;
