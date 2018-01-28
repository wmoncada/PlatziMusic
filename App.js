import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';

export default class App extends React.Component {

  render() {
    let artist = {
      image: 'https://lastfm-img2.akamaized.net/i/u/770x0/eb66da98c1924a7ca24004a902bd5076.jpg#eb66da98c1924a7ca24004a902bd5076',
      name: "The Beatles",
      likes: 200,
      comments: 140,
    }

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
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
});
