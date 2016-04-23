var Button = require('react-native-button');
var React = require('react-native');
var UsersShow = require("./UsersShow");
var PetShow = require('./PetShow');

import SwipeCards from 'react-native-swipe-cards';
import Tinder from './Tinder.js'

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  Image,
  TouchableHighlight,
} = React;

var REQUEST_URL = 'http://localhost:3000/index.json';
var FAVORITE_URL = 'http://localhost:3000/pets.json';
var PET_URL = 'http://localhost:3000/pets/1.json';


let Pet = React.createClass({
  render() {
    return (
      <View style={styles.pet}>
        <Image
          style={styles.thumbnail}
          source={{uri: image}}
          />
        <Text style={styles.name}> {this.state.currentPet.name} </Text>
      </View>
    )
  }
})

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPet: null,
      loaded: false,
      detailsClicked: false,
    }
  }
  onPress() {
    this.props.navigator.push({
        title: 'Favorites',
        component: UsersShow
    });
  }
  onLikeButtonPress() {
    this.addFavorite(this.state.currentPet)
  }
  addFavorite(pet){
    var obj = {
      method: 'POST',
      body: JSON.stringify({pet})
    }
    fetch(FAVORITE_URL, obj)
      .then((response) => this.fetchData())
      .done();
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        this.setState({
          currentPet: responseData,
          loaded: true,
        });
      })
      .done();
  }
  showDetails(){
    this.setState({detailsClicked: true})
  }
  refreshPage(){
    this.setState({detailsClicked: false})
  }
  handleFavorite (card) {
    console.log("LOVE!")
  }
  handleNext (card) {
    console.log("You Sure?!")
  }
  render() {
    var self = this;
    if (!this.state.loaded){
      return this.renderLoadingView();
    }else if (this.state.detailsClicked) {
      var pet = this.state.currentPet;
      return (
        <PetShow refreshPage={self.refreshPage.bind(self)}/>
      )
    }

    var image = this.state.currentPet.url
    return (
      <View style={styles.container}>
        <SwipeCards
          cards={this.state.cards}

          renderCard={(this.state.pet) => swipe area section}

          handleYup={this.Onlike function}
          handleNope={this.handleNope}
        />
        <View
          style={styles.swipeArea}
          >
            <Image
              style={styles.thumbnail}
              source={{uri: image}}
              />
          <Text style={styles.name}> {this.state.currentPet.name} </Text>
        </View>
        <View style={styles.likeDislikeButtons}>
          <Button onPress={self.fetchData.bind(self)}>
            <Image
              style={styles.buttonImg} source={{uri: 'http://www.iconsdb.com/icons/preview/tropical-blue/x-mark-xxl.png'}}
            />
          </Button>
          <Button onPress={self.onLikeButtonPress.bind(self)}>
            <Image
              style={styles.buttonImg}
              source={{uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-128.png'}}
            />
          </Button>
        </View>
        <View style={styles.detailsButton}>
          <Button
            style={{borderWidth: 1, borderColor: 'blue'}}
            onPress={this.showDetails.bind(this)}>
            Details
          </Button>
        </View>
      </View>
    );
  }
  renderLoadingView(){
    return (
      <View>
        <Text>
          Loading pets...
        </Text>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImg: {
    width: 50,
    height: 50,
    margin: 20,
  },
  likeDislikeButtons: {
    flexDirection: 'row'
  },
  detailsButton: {
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  thumbnail: {
    width: 350,
    height: 350,
  },
  swipeArea: {
    backgroundColor: '#e3e3e3',
    padding: 7
  },
  name: {
    fontSize: 40,
  }
  });


module.exports = Homepage;
