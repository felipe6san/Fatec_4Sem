import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
  // Definindo um estilo básico para o texto
  const estilo = style?.fontWeight === 'bold' ? estilos.textoNegrito : estilos.texto;

  return <Text style={[estilo, style]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'sans-serif', // Fontes seguras, garantindo a compatibilidade
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});
