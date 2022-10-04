import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Lista de Contatos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#790080',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});