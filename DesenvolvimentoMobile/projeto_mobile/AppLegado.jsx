import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import imagem from './assets/steve.png'
import imagem2 from './assets/herobrine.png'

class App extends Component{
  render() {

    let nome = 'Steve'

    return(
        
      <View style = {{flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-around'}}>
        <View style= {{width: 50, height: 50, backgroundColor: 'red'}}></View>
        <View style= {{width: 50, height: 50, backgroundColor: 'green'}}></View>
        <View style= {{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
        <View style= {{width: 50, height: 50, backgroundColor: 'purple'}}></View> 
        <View style= {{width: 50, height: 50, backgroundColor: 'blue'}}></View>
      </View>

    //   <View style={{ marginTop: 20}}>
    //     <Text style={styles.texto1}>Eu sou texto 1</Text>
    //     <Text style={styles.texto2}>Eu sou texto 2</Text>
    //     <Text style={styles.texto3}>Eu sou texto 3</Text>
    //     <Text style={styles.texto4}>Eu sou texto 4</Text>

    //  {/* <Text>Olá Professor...</Text>
    //     <Text style={{ color: '#FF0000', fontSize: 15, margin: 15}}>Programador Steve</Text>
    //     { <Image style={{ width:200, height:275}} source={imagem}/> }
    //     <Text style={{ marginLeft: 65}}>{nome}</Text>
    //     <Text style={{ color: '#FF0000', fontSize: 15, margin: 15}}>Programador Herobrine</Text>
    //     { <Image style={{ width:200, height:250}} source={imagem2}/> }  */}

    //   </View>

    
    );
  }
}

const styles = StyleSheet.create({
  texto1: {
    fontSize: 25,
    color: 'green'
  },

  texto2: {
    fontSize: 30,
    color: 'red'
  },

  texto3: {
    fontSize: 35,
    color: 'blue'

  },

  texto4: {
    fontSize: 40,
    color: 'purple'
  }


})
export default App; 