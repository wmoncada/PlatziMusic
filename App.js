import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {

  render() {
    let image = 'https://lastfm-img2.akamaized.net/i/u/770x0/eb66da98c1924a7ca24004a902bd5076.jpg#eb66da98c1924a7ca24004a902bd5076';
    let artistName = "The Beatles";
    let likes = 200;
    let comments = 140

    return (
      <View style={styles.container}>    
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} /> 
          <View style={styles.info}>
            <Text style={styles.name}>{artistName}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="md-heart-outline" size={30} color="gray" />
                <Text style={styles.count}>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="md-chatboxes" size={30} color="gray" />
                <Text style={styles.count}>{comments}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'lightgray',
  },
  image: {
    width: 150,
    height: 150
  },
  artistBox: {
    backgroundColor: "white",
    flexDirection: "row",
  },
  info: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center' 
  },
  count: {
    color: 'gray'
  }
});
