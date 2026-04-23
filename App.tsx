import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const frases = [
  'Acredite em si mesmo e siga em frente.',
  'O sucesso começa com um pequeno passo.',
  'Cada novo dia traz novas oportunidades.',
  'Sua atitude define seu destino.',
  'Pratique a gratidão todos os dias.',
  'A paciência é amiga da sabedoria.',
  'A felicidade começa com um pensamento positivo.',
];

export default class App extends Component {
  state = {
    textoFrase: '',
    imagem: require('./assets/imagens/biscoito_fechado.jpeg'),
  };

  quebrarBiscoito = () => {
    const posicao = Math.floor(Math.random() * frases.length);
    this.setState({
      textoFrase: frases[posicao],
      imagem: require('./assets/imagens/biscoito_aberto.jpg'),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Biscoito da Sorte</Text>
        <Image source={this.state.imagem} style={styles.biscoito} />
        <Text style={styles.frase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <Text style={styles.textoBotao}>Quebrar biscoito</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4ef',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#4a2f0b',
  },
  biscoito: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  frase: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: '#d97706',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
