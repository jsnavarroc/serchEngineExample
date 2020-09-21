import React, { useState } from 'react';
import { View } from 'react-native';
import { dataPersons } from '../commons/dataExample';
import styles from '../Styles';
import SearchEngine from 'react-native-search-engine';
import Icon from 'react-native-vector-icons/FontAwesome';

const SerchEngineExample = () => {
  //Option 1
  // const [dataFilter, setDataFilter] = useState({ data: dataPersons });

  //Option 2
  const [dataFilter, setDataFilter] = useState({ data: [] });
  return (
    <View>
      <View style={styles.containerInputView}>
        <SearchEngine
          data={dataPersons}
          placeholder={'Name'}
          searchKey={'name'}
          onChangeSearch={object => {
            setDataFilter(object);
          }}
          buttonEnabled={true}
          //Option 1
          showAllMode={true}
          //Option 2
          // showAllMode={false}
        />
      </View>
    </View>
  );
};

export default SerchEngineExample;
