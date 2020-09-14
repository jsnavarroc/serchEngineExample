import React from 'react';
import { Image, TouchableNativeFeedback, View, Text } from 'react-native';

/* Utilities */
import styles from '../Styles';

const CardImageExample = ({ value, keyCard }) => {
  const name = `${value.name} ${value.lastName}`;
  // const idMunicipality = value.idMunicipality;
  return (
    <>
      <View key={keyCard} style={styles.cardInfoUser}>
        <View cardBody>
          <TouchableNativeFeedback
            onPress={() => console.log('as')}
            background={TouchableNativeFeedback.Ripple('blue', true)}
          >
            <Image source={{ uri: value.picture }} style={styles.img} />
          </TouchableNativeFeedback>
        </View>
        <View>
          <Text style={styles.text}>
            {name.length > 30 ? `${name.slice(0, 30)}...` : name}
          </Text>
        </View>
      </View>
    </>
  );
};

export default CardImageExample;
