const initialState = {
  text: '',
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_CN':
      console.log(action.text);
      return Object.assign({}, state, {
        text: action.text,
      });
    default:
      return state;
  }
};

export default reducers;
