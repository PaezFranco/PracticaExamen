import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SavingsScreen = ({ navigation }) => {
  const [savings, setSavings] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Ahorros: ${savings}</Text>

      <TouchableOpacity style={styles.infoContainer} onPress={() => setSavings(savings + 10)}>
        <Ionicons name="add-circle-outline" size={20} color="#fff" />
        <Text style={styles.infoText}> Añadir 10</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.infoContainer, styles.resetButton]} onPress={() => setSavings(0)}>
        <Ionicons name="refresh-circle-outline" size={20} color="#fff" />
        <Text style={styles.infoText}> Reiniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.infoContainer, styles.backButton]} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={20} color="#fff" />
        <Text style={styles.infoText}> Regresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#34495E",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "80%",
    borderRadius: 10,
    marginVertical: 5,
  },
  infoText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 10,
  },
  resetButton: {
    backgroundColor: "#598ca2",
  },
  backButton: {
    backgroundColor: "#007BFF",
  },
});

export default SavingsScreen;