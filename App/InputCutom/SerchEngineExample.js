import React, { useState } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { dataPersons } from '../commons/dataExample';
import styles from '../Styles';
import SearchEngine from 'react-native-search-engine';
import Card from '../commons/Card';

const CustomizeComponentInput = props => {
  const [value, onChangeText] = useState('');
  const { onChangeSearchEngine, setDataFilter } = props;
  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder={'Custom Input Component. Write!:'}
      onChangeText={text => {
        onChangeText(text);
        setDataFilter(onChangeSearchEngine(text));
      }}
      value={value}
    />
  );
};

const SerchEngineExample = () => {
  //Option 1
  const [dataFilter, setDataFilter] = useState({ data: dataPersons });
  //Option 2
  //   const [dataFilter, setDataFilter] = useState({ data: [] });
  return (
    <View>
      <SearchEngine
        data={dataPersons}
        searchKey={'name'}
        customizeComponentInput={{
          InputCutom: CustomizeComponentInput,
          addPropsInput: { setDataFilter },
        }}
        //Option 1
        showAllMode={true}
        showNoResults={true}
        //Option 2
        // showAllMode={false}
      />
      <ScrollView>
        <View style={styles.content_imgs}>
          {dataFilter.data.map((value, key) => (
            <Card value={value} keyCard={key} key={key} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SerchEngineExample;
