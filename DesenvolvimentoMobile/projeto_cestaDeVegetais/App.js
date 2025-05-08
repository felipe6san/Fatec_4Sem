import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/index';
import mock from './src/mocks/Cesta';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
