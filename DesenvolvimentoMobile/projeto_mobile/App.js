import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import imagem from './assets/steve.png'
import imagem2 from './assets/herobrine.png'

class App extends Component{
  render() {

    let nome = 'Steve'

    return(
      <View>
        <Text>Olá Professor...</Text>
        <Text style={{ color: '#FF0000', fontSize: 15, margin: 15}}>Programador Steve</Text>
        { <Image style={{ width:200, height:275}} source={imagem}/> }
        <Text style={{ marginLeft: 65}}>{nome}</Text>
        <Text style={{ color: '#FF0000', fontSize: 15, margin: 15}}>Programador Herobrine</Text>
        { <Image style={{ width:200, height:250}} source={imagem2}/> }
      </View>
    );
  }
}

export default App; 