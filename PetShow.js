var Button = require('react-native-button');
var Swiper = require('react-native-swiper');
var React = require('react-native');
var TableView = require('react-native-tableview')

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
} = React;

class PetShow extends Component {
  _handleDislike() {
    this.props.refreshPageWithNewAnimal()
  }
  _handleBack(){
    this.props.refreshPage()
  }
  onLikeButtonPress() {
    this.props.onLikeButtonPress()
  }
  render() {
    var currentPet = this.props.clickedPet
    var image = ''
      if (this.props.clickedPet.url) {
          image = this.props.clickedPet.url
      } else {
          image = this.props.clickedPet.photos[0].url
      };
    var self = this;

    if (this.props.favorited == false){
      return (
        <View style={styles.container}>
          <View style={styles.pictures}>
            <View style={styles.slide1}>
              <Image
                style={styles.thumbnail}
                source={{uri: image}}
              />
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Second image</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Third Image</Text>
            </View>
          </View>

          <View style={styles.likeDislikeButtons}>
            <Button onPress={self._handleDislike.bind(self)}>
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
          <View style={styles.backButton}>
            <Button
              style={{borderWidth: 1, borderColor: 'blue'}}
              onPress={this._handleBack.bind(self)}>
              Back
            </Button>
          </View>


          <ScrollView
            style={styles.details}
            showsVerticalScrollIndicator true
          >
            <Text>name: {currentPet.name}</Text>
            <Text>animal: {currentPet.animal}</Text>
            <Text>age: {currentPet.age}</Text>
            <Text>altered: {currentPet.altered}</Text>
            <Text>animal: {currentPet.animal}</Text>
            <Text>breed: {currentPet.breed}</Text>
            <Text>gender: {currentPet.gender}</Text>
            <Text>shots: {currentPet.shots}</Text>
            <Text>size: {currentPet.size}</Text>
            <Text>notes: {currentPet.special_needs}</Text>
            <Text>description: {currentPet.description}</Text>
          </ScrollView>
        </View>
      );
    } else if (this.props.favorited == true){
      return (
        <View style={styles.container}>
          <View style={styles.pictures}>
            <View style={styles.slide1}>
              <Image
                style={styles.thumbnail}
                source={{uri: image}}
              />
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Second image</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Third Image</Text>
            </View>
          </View>

          <ScrollView
            style={styles.details}
            showsVerticalScrollIndicator true
          >
            <Text>name: {currentPet.name}</Text>
            <Text>animal: {currentPet.animal}</Text>
            <Text>age: {currentPet.age}</Text>
            <Text>altered: {currentPet.altered}</Text>
            <Text>animal: {currentPet.animal}</Text>
            <Text>breed: {currentPet.breed}</Text>
            <Text>gender: {currentPet.gender}</Text>
            <Text>shots: {currentPet.shots}</Text>
            <Text>size: {currentPet.size}</Text>
            <Text>notes: {currentPet.special_needs}</Text>
            <Text>description: {currentPet.description}</Text>
          </ScrollView>
        </View>
      );
    }


    }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pictures: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonImg: {
    width: 50,
    height: 50,
    margin: 20,
  },
  likeDislikeButtons: {
    flexDirection: 'row'
  },
  backButton: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 25,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  detailName: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingVertical: 7,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 350,
    height: 350,
  }
})

module.exports = PetShow;
