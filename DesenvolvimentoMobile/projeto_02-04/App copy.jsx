import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function BancoApp() {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState(0);
  const [limite, setLimite] = useState(500);
  const [casado, setCasado] = useState(false);
  const [contaAberta, setContaAberta] = useState(false);

  const sexos = [
    { key: 0, nome: 'Masculino' },
    { key: 1, nome: 'Feminino' }
  ];

  const abrirConta = () => {
    setContaAberta(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Banco</Text>
      
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}
        style={styles.picker}
      >
        {sexos.map((s) => (
          <Picker.Item key={s.key} value={s.key} label={s.nome} />
        ))}
      </Picker>

      <Text style={styles.label}>Limite da Conta: R$ {limite.toFixed(2)}</Text>
      <Slider
        minimumValue={100}
        maximumValue={5000}
        step={100}
        value={limite}
        onValueChange={setLimite}
        style={styles.slider}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Estado Civil:</Text>
        <Text style={styles.estadoCivil}>{casado ? 'Casado' : 'Solteiro'}</Text>
        <Switch value={casado} onValueChange={setCasado} />
      </View>

      <Button title="Abrir Conta" onPress={abrirConta} />

      {contaAberta && (
        <View style={styles.resultContainer}>
          <Text style={styles.successMessage}>Conta aberta com sucesso!</Text>
          <Text>Nome: {nome}</Text>
          <Text>Sexo: {sexos[sexo].nome}</Text>
          <Text>Limite: R$ {limite.toFixed(2)}</Text>
          <Text>Estado Civil: {casado ? 'Casado' : 'Solteiro'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  estadoCivil: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#28a745',
    borderRadius: 5,
    backgroundColor: '#d4edda',
  },
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#155724',
    marginBottom: 5,
  },
});
