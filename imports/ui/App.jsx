import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
// import { createContainer } from 'meteor/react-meteor-data'

import { search } from './redux/actions';


const App = ({ text, handleKey }) => (
  <div>
    <AppBar
      title="Hello!"
      showMenuIconButton={false}
    />
    <p>{text}</p>
    <Paper style={{ padding: 10 }} zDepth={2}>
      <h3>Project Outline</h3>
      <h4>Overview</h4>
      <p>
      This project takes in a search query, finds top 10 products on amazon,
      translates the names of these products into some language, finds
      alternatives on foreign sites, and displays information about these items
      in an interesting way.
      </p>
      <h4>Technology</h4>
      <p>Tensorflow, currently using a linear model that can be scaled to a
      deep learning model</p>
      <h4>Market</h4>
      <p>People interested in getting items for a lower price, or selling items
      in the US for a profit</p>
      <h4>Products</h4>
      <p>Generally items that people are willing to buy for a cheaper price from
      an unknown seller. An item that is used for a short time and is non-essential.
      </p>
      <TextField
        hintText="SEARCH FOR SOMETHING"
        onKeyPress={handleKey}
      />
    </Paper>
  </div>
);

App.propTypes = {
  text: PropTypes.string.isRequired,
  handleKey: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  text: state.text,
});

const mapDispatchToProps = dispatch => ({
  handleKey: (event) => {
    if (event.key === 'Enter') {
      return dispatch(search(event.target.value));
    }
    return console.log('K');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
