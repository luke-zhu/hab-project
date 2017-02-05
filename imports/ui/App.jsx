import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
// import { createContainer } from 'meteor/react-meteor-data'

import { search } from './redux/actions';


const App = ({ text, items, titles, images, handleKey }) => {
  const rows = [];
  console.log(titles);
  items.forEach((e, i) => {
    if (i < 4) {
      rows.push(
        <Card style={{ maxWidth: '360px' }}>
          <CardMedia>
            <img src={images[i].src} />
          </CardMedia>
          <CardTitle subtitle={titles[i]} title={e.textContent} />
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
    </div>
  );
};

App.propTypes = {
  text: PropTypes.string,
  handleKey: PropTypes.func.isRequired,
  items: PropTypes.array,
  images: PropTypes.array,
  titles: PropTypes.array,
};

const mapStateToProps = state => ({
  text: state.text,
  items: state.items,
  images: state.images,
  titles: state.titles,
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
