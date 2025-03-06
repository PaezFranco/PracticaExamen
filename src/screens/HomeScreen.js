import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate('Savings')}>
        <Ionicons name="wallet-outline" size={20} color="#fff" />
        <Text style={styles.infoText}> Ir a Ahorros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={20} color="#fff" />
        <Text style={styles.infoText}> Ir a Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={20} color="#fff" />
        <Text style={styles.infoText}> Ir a Configuración</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
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
    justifyContent: "center", 
  },
  infoText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default HomeScreen;