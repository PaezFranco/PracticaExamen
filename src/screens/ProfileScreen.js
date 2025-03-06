import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: "Juan Pérez",
    location: "Hogwarts",
    email: "malfoydraco@gmail.com",
    phone: "635 227 520",
    linkedin: "https://wallpapers.com/images/hd/young-draco-malfoy-aesthetic-pz4q1efuojwnp3lp.jpg",
    artstation: "https://www.civitatis.com/blog/wp-content/uploads/2021/01/escenarios-rodaje-harry-potter.jpg",
    image: "https://media.harrypotterfanzone.com/draco-malfoy-philosophers-stone-portrait.jpg",
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.profileImage} />
      <Text style={styles.title}>INFORMACIÓN PERSONAL</Text>

      <View style={styles.infoContainer}>
        <Ionicons name="location-outline" size={20} color="#fff" />
        <Text style={styles.infoText}>{user.location}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="mail-outline" size={20} color="#fff" />
        <Text style={styles.infoText}>{user.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="call-outline" size={20} color="#fff" />
        <Text style={styles.infoText}>{user.phone}</Text>
      </View>

      <TouchableOpacity style={styles.infoContainer} onPress={() => Linking.openURL(user.linkedin)}>
        <Ionicons name="information-circle-outline" size={20} color="#fff" />
        <Text style={styles.linkText}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={() => Linking.openURL(user.artstation)}>
        <Ionicons name="globe-outline" size={20} color="#fff" />
        <Text style={styles.linkText}>Hogwarts</Text>
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#00A8FF",
    marginBottom: 15,
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
  linkText: {
    color: "#00A8FF",
    fontSize: 16,
    marginLeft: 10,
    textDecorationLine: "underline",
  },
  backButton: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
