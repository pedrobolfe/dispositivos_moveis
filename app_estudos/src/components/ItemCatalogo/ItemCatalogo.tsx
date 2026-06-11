import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../../styles/styles';

export type ItemData = {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
};

type Props = {
  item: ItemData;
  selected: boolean;
  onPress: () => void;
};

export function ItemCatalogo({ item, selected, onPress }: Props) {
  return (
    <Pressable
      style={[styles.item, selected && styles.itemSelected]}
      onPress={onPress}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.itemCategory}>{item.categoria}</Text>
      </View>
      <Text style={styles.itemDesc}>{item.descricao}</Text>
    </Pressable>
  );
}
