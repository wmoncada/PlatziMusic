import React from 'react';
import { 
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import ArtistList from './src/ArtistList';

export default class App extends React.Component {

  render() {
    let artist = {
        image: 'https://lastfm-img2.akamaized.net/i/u/770x0/eb66da98c1924a7ca24004a902bd5076.jpg#eb66da98c1924a7ca24004a902bd5076',
        name: "The Beatles",
        likes: 2000,
        comments: 140,
      }

    const artists = Array(6).fill(artist);

    return (
      <View style={styles.container}>
        <ArtistList artists={artists} />
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
