import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// import { createContainer } from 'meteor/react-meteor-data'

<<<<<<< Updated upstream
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

=======
<<<<<<< HEAD
class App extends React.Component {
  constructor(){
    super();
    this.state = {search : false};
  }
  showResults(){
    this.setState({
      search: true
    });
    //document.body.style.background = "url('/images/Results.jpg')";
  }
  goBackHome(){
    //document.body.style.background = "url('/images/Desktop.jpg')";
    this.setState({
      search: false
    });
    
  }

  render(){
    let content;
    if (this.state.search) {
      content = (
        <div className="result">
          <img src="/images/Results.jpg"/>
          <img className="product1" src="https://i1.sndcdn.com/avatars-000284619476-k0exrk-t500x500.jpg"/>
          <img className="product2" src="https://i1.sndcdn.com/avatars-000284619476-k0exrk-t500x500.jpg"/>
          <img className="product3" src="https://i1.sndcdn.com/avatars-000284619476-k0exrk-t500x500.jpg"/>
          <img className="product4" src="https://i1.sndcdn.com/avatars-000284619476-k0exrk-t500x500.jpg"/>
          <img className="product5" src="https://i1.sndcdn.com/avatars-000284619476-k0exrk-t500x500.jpg"/>
          <div className="text1">
            <p1>jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh
            jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh</p1>
          </div>
          <div className="text2">
            <p1>jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh
            jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh</p1>
          </div>
          <div className="text3">
            <p1>jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh
            jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh</p1>
          </div>
          <div className="text4">
            <p1>jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh
            jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh</p1>
          </div>
          <div className="text5">
            <p1>jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh
            jsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhhjsjlfhhhhhhhhhhhhhhh</p1>
          </div>
            <img className="header" src="/images/Header.jpg" />
            <div className="resultSearch">
            <TextField
            hintText="SEARCH FOR A PRODUCT"
            fullWidth={false}
            style={{'width': 665}} />
          </div>
          <div className="resultSearchButton">
          <RaisedButton 
            label="search"
            labelColor="gray"
            style={{'width': 200 , 'height': 31}}
            onClick = {() => this.showResults() }/>
        </div>  
        <div className="goBack">  
          <button className="button" 
          onClick = {() => this.goBackHome() }/>
        </div>
        </div>);
    } else {
      content = (
      <div className="home">
        <img src="/images/Desktop.jpg"/>
        <div className="search">
          <TextField
            hintText="SEARCH FOR A PRODUCT"
            fullWidth={false}
            style={{'width': 665}}/>
        </div>
        <div className="searchButton">
          <RaisedButton 
            label="search"
            labelColor="gray"
            style={{'width': 200 , 'height': 31}}
            onClick = {() => this.showResults() }/>
        </div>  
        </div>
      )
    }

    return (
      <div>{content}</div>
    )
  }

}

{/*const App = () => (
  <div>
  <TextField class="search"
      hintText="SEARCH FOR A PRODUCT"
      fullWidth={false}
      style={{ 'margin-top': 450 , 'margin-left': 365 , 'width': 665}} />
  <RaisedButton 
    label="search"
    labelColor="gray"
    style={{ 'margin-top': 20 , 'margin-left': 612 , 'width': 200 , 'height': 31}}
    onClick = {() => console.log("worked")}/>
  </div>

    {/*<AppBar
      title="SCOPE"
      showMenuIconButton={false}
    />
    
    <img border="0" height="100" width="100" hspace="0" src="http://www.w3schools.com/images/w3schools_green.jpg" />
    
  {/*<Paper width="1px">
  <Card class="card">
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img height="100" width="1" src="http://lorempixel.com/600/337/nature/"/>
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
  <Card>
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img border="0" height="100" width="100" hspace="0" src="http://www.w3schools.com/images/w3schools_green.jpg"  />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
  <Card>
    
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img border="0" height="100" width="100" hspace="0" src="http://www.w3schools.com/images/w3schools_green.jpg"  />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
  </Paper>
    {/*<div>
    <div>
    <div>
    
    <div class="container">
    <header>
      <h1>Product title</h1>
    </header>
    </div>
    <p>
    Some random shit about the product
    </p>
    <p>
    Some random shit about the product
    </p>
    <p>
    Some random shit about the product
    </p>
    </div>
    </div>
    </div>

    <div>
    <img border="0" height="100" width="100" hspace="0" src="http://www.w3schools.com/images/w3schools_green.jpg"  />
    <div class="container">
    <header>
      <h1>Product title</h1>
    </header>
    </div>
    <p>
    Some random shit about the product
    </p>
    <p>
    Some random shit about the product
    </p>
    <p>
    Some random shit about the product
    </p>

    </div>
    {/*<Paper style={{ padding: 10 }} zDepth={2}>
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
    </Paper>
);*/}
=======
import { search, updatePrice } from './redux/actions';

>>>>>>> origin/master

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

>>>>>>> Stashed changes
export default connect(mapStateToProps, mapDispatchToProps)(App);
