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
    color: 'red',
    fontFamily: 'TrebuchetMS bold',
  },
  options: {
    backgroundColor: '#adceff',
    borderRadius: 0,
  },
  input: {
    backgroundColor: '#afaa',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  leftIcon: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#afaa',
  },
  containerInputView: {
    marginVertical: 8,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    marginLeft: 35,
    width: 340,
    height: 40,
    margin: 25,
  },
  searchIcon: {
    padding: 10,
  },
  inputTwo: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    marginLeft: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
