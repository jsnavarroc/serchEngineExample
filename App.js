/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SerchEngineExample from './App/InputCutom/SerchEngineExample';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SerchEngineExample />
      </SafeAreaView>
    </>
  );
};

export default App;