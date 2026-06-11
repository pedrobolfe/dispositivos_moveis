import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, Pressable } from 'react-native';
import { ItemCatalogo, ItemData } from './src/components/ItemCatalogo/ItemCatalogo';
import { styles } from './src/styles/styles';

const temas: ItemData[] = [
  { id: '1', nome: 'React Native', descricao: 'App para celular', categoria: 'Mobile' },
  { id: '2', nome: 'TypeScript', descricao: 'Tipos para React', categoria: 'Web' },
  { id: '3', nome: 'Flexbox', descricao: 'Organizar tela', categoria: 'UI' },
  { id: '4', nome: 'FlatList', descricao: 'Lista com dados', categoria: 'UI' },
  { id: '5', nome: 'ScrollView', descricao: 'Rolagem horizontal', categoria: 'UI' },
];

const categorias = ['Mobile', 'Web', 'UI'];

export default function App() {
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState('1');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Estudos</Text>
      <Text style={styles.subtitle}>Temas simples para aprender</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        {categorias.map(categoria => (
          <View key={categoria} style={styles.category}>
            <Text style={styles.categoryText}>{categoria}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.actionRow}>
        <Text style={styles.counter}>Cliques: {count}</Text>
        <Pressable style={styles.button} onPress={() => setCount(value => value + 1)}>
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>
      </View>

      <FlatList
        data={temas}
        renderItem={({ item }) => (
          <ItemCatalogo
            item={item}
            selected={item.id === selectedId}
            onPress={() => setSelectedId(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
