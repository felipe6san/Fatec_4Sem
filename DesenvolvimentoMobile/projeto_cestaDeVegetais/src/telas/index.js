import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Texto from '../componentes/Texto';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <FlatList
      data={itens.lista} 
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => (
        <>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={estilos.titulo}>{itens.titulo}</Texto>
          </View>
        </>
      )}
    />
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    alignSelf: 'flex-start',
  },
  titulo: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontFamily: 'Arial',
  },
  fazenda: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'Arial',
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
