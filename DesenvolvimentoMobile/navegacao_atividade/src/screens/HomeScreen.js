import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="IR PARA CADASTRO" color="red" onPress={() => navigation.navigate('Cadastro')} />
      </View>
      <View style={styles.button}>
        <Button title="IR PARA CONSULTA" color="blue" onPress={() => navigation.navigate('Consulta')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: 200,
  },
});
