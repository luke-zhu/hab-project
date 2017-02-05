import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';

import Faq from './Faq.jsx';

import {
  search,
  updatePrice,
  toResults,
  toSearch,
  openDialog,
  closeDialog,
} from './redux/actions';

const App = ({ text, items, titles, images, handleKey, price, selectItem, isSearching, showResults, goBackHome, handleDialog, handleClose, isOpen, loading }) => {
  console.log(isSearching);
  console.log(isOpen);
  const rows = [];
  items.forEach((e, i) => {
    if (i < 4) {
      rows.push(
        <Card
          style={{
            maxWidth: '360px',
            margin: '15px',
            backgroundColor: '#D8D8D8',
          }}
          onClick={() => selectItem(items[i])}
        >
          <CardMedia ba>
            <img src={images[i].src} />
          </CardMedia>
          <CardTitle
            subtitle={titles[i]}
            title={`$${(parseFloat(e.textContent.substring(1)) * 0.15).toFixed(2)}`}
          />
        </Card>
      );
    }
  });
  if (isSearching) {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <FlatButton
          label="Our Goal"
          onClick={handleDialog}
        />
        <Faq isOpen={isOpen} onRequestClose={handleClose} />
        <TextField
          hintText="SEARCH FOR A PRODUCT"
          fullWidth={false}
          style={{
            width: '60%',
            backgroundColor: 'white',
            display: 'block',
            marginTop: '27%',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
          underlineStyle={{
            borderColor: '#D8D8D8',
            color: '#D8D8D8',
            width: '97%',
          }}
          onKeyPress={handleKey}
        />
      </ReactCSSTransitionGroup>
    );
  }
  return (
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <FlatButton
        label="SCOPE"
        onClick={goBackHome}
      />
      <TextField
        hintText="SEARCH FOR A PRODUCT"
        fullWidth={false}
        style={{
          width: '60%',
          // backgroundColor: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
        underlineStyle={{
          borderColor: '#D8D8D8',
          color: '#D8D8D8',
          width: '98%',
        }}
        onKeyPress={handleKey}
      />
      {loading ? (
        <LinearProgress
          mode="indeterminate"
          style={{
            display: 'block',
            marginTop: '27%',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
          }}
        />
        ) : null}
      <Paper style={{ backgroundColor: 'white', display: 'flex' }} zDepth={2}>
        {rows}
      </Paper>
      {price ? (
        <Paper style={{ backgroundColor: '#97989D', paddingTop: '10px' }} zDepth={0}>
          <h3 style={{ paddingLeft: '20px' }} >Information for Sellers</h3>
          <Paper style={{ display: 'flex' }} >
            <div style={{ backgroundColor: '#D8D8D8', paddingLeft: '20px', flex: 1 }} zDepth={2}>
              <h3>Amazon</h3>
              <h4>Referral Fee: ~${(0.1 * price).toFixed(2)}</h4>
              <h4>Fulfillment Fee: ~${(0.15 * price).toFixed(2)}</h4>
              <h4>Total Cost to Sell: ~${(1.25 * price).toFixed(2)}</h4>
            </div>
            <div style={{ backgroundColor: '#D8D8D8', paddingLeft: '20px', flex: 1 }} zDepth={2}>
              <h3>Ebay</h3>
              <h4>Listing Fee: ~${(0.1 * price).toFixed(2)}</h4>
              <h4>Total Cost to Sell: ~${(1.1 * price).toFixed(2)} + Storage Cost per Unit</h4>
            </div>
          </Paper>
        </Paper>
        ) : null
      }
    </ReactCSSTransitionGroup>
  );
};

App.propTypes = {
  text: PropTypes.string,
  handleKey: PropTypes.func.isRequired,
  items: PropTypes.array,
  images: PropTypes.array,
  titles: PropTypes.array,
  price: PropTypes.number.isRequired,
  selectItem: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
  handleDialog: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  text: state.text,
  items: state.items,
  images: state.images,
  titles: state.titles,
  price: state.price,
  isSearching: state.isSearching,
  isOpen: state.isOpen,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  handleKey: (event) => {
    if (event.key === 'Enter') {
      dispatch(toResults());
      return dispatch(search(event.target.value));
    }
  },
  selectItem: item => dispatch(updatePrice(item)),
  // showResults: () => dispatch(toResults()),
  goBackHome: () => dispatch(toSearch()),
  handleDialog: () => dispatch(openDialog()),
  handleClose: () => dispatch(closeDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
