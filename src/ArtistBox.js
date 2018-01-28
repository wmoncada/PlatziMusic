import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtistBox extends React.Component {

  render() {
    //console.warn('El nombre del artista: ' + this.props.artist.name)
    let { image, name, likes, comments } = this.props.artist

    return (
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} /> 
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
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
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  },
  artistBox: {
    margin: 5,
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 4
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
