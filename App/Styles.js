import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentPeople: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly', //space-between,
  },
  cardInfoUser: {
    alignItems: 'center',
    marginLeft: 4,
    marginTop: 20,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 15,
    color: '#6e6e6e',
    fontFamily: 'TrebuchetMS bold',
  },
});
