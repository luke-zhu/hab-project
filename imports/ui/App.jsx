import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
// import { createContainer } from 'meteor/react-meteor-data'

import { search, updatePrice } from './redux/actions';


const App = ({ text, items, titles, images, handleKey, price, selectItem }) => {
  const rows = [];
  console.log(titles);
  items.forEach((e, i) => {
    if (i < 4) {
      rows.push(
        <Card style={{ maxWidth: '360px' }} onClick={() => selectItem(items[i])}>
          <CardMedia>
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
  return (
    <div>
      <AppBar
        title="Hello!"
        showMenuIconButton={false}
        iconElementRight={
          <TextField
            hintText="SEARCH FOR SOMETHING"
            onKeyPress={handleKey}
          />
        }
      />
      <Paper style={{ display: 'flex' }} zDepth={2}>
        {rows}
      </Paper>
      {price ? (
        <Paper style={{ display: 'flex' }} zDepth={0}>
          <Paper style={{ paddingLeft: '20px', flex: 1 }} zDepth={2}>
            <h3>Amazon</h3>
            <h4>Referral Fee: ~${(0.1 * price).toFixed(2)}</h4>
            <h4>Fulfillment Fee: ~${(0.15 * price).toFixed(2)}</h4>
            <h4>Total Cost to Sell: ~${(1.25 * price).toFixed(2)}</h4>
          </Paper>
          <Paper style={{ paddingLeft: '20px', flex: 1 }} zDepth={2}>
            <h3>Ebay</h3>
            <h4>Listing Fee: ~${(0.1 * price).toFixed(2)}</h4>
            <h4>Total Cost to Sell: ~${(1.1 * price).toFixed(2)} + Storage Cost per Unit</h4>
          </Paper>
        </Paper>
        ) : null
      }
    </div>
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
};

const mapStateToProps = state => ({
  text: state.text,
  items: state.items,
  images: state.images,
  titles: state.titles,
  price: state.price,
});

const mapDispatchToProps = dispatch => ({
  handleKey: (event) => {
    if (event.key === 'Enter') {
      return dispatch(search(event.target.value));
    }
    return console.log('K');
  },
  selectItem: item => dispatch(updatePrice(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
