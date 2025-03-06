import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {

  const [theme, setTheme] = useState('dark'); 
  const [language, setLanguage] = useState('es');

  const showSettingAlert = (setting) => {
    Alert.alert(
      language === 'es' ? 'Configuración seleccionada' : 'Selected Setting',
      language === 'es'
        ? `Has seleccionado: ${setting}`
        : `You selected: ${setting}`,
    );
  };
  const texts = {
    es: {
      title: ' Configuración',
      theme: 'Cambiar Tema',
      language: 'Cambiar Idioma',
      privacy: 'Privacidad',
      security: 'Seguridad',
      accessibility: 'Accesibilidad',
      notifications: 'Notificaciones',
      back: 'Regresar',
    },
    en: {
      title: ' Settings',
      theme: 'Change Theme',
      language: 'Change Language',
      privacy: 'Privacy',
      security: 'Security',
      accessibility: 'Accessibility',
      notifications: 'Notifications',
      back: 'Back',
    },
  };
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#2C3E50' : '#F5F5F5',
      alignItems: 'center',
      paddingTop: 50,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: theme === 'dark' ? '#FFF' : '#333',
      marginBottom: 20,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#34495E' : '#E0E0E0',
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: '80%',
      borderRadius: 10,
      marginVertical: 5,
    },
    infoText: {
      color: theme === 'dark' ? '#FFF' : '#333',
      fontSize: 16,
      marginLeft: 10,
    },
    backButton: {
      marginTop: 20,
      backgroundColor: theme === 'dark' ? '#007BFF' : '#4891ce',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.title}>{texts[language].title}</Text>

    
      <TouchableOpacity
        style={dynamicStyles.infoContainer}
        onPress={() => showSettingAlert(texts[language].theme)}
      >
        <Ionicons
          name="color-palette-outline"
          size={20}
          color={theme === 'dark' ? '#FFF' : '#333'}
        />
        <Text style={dynamicStyles.infoText}>{texts[language].theme}</Text>
      </TouchableOpacity>

   
      <TouchableOpacity
        style={dynamicStyles.infoContainer}
        onPress={() => showSettingAlert(texts[language].language)}
      >
        <Ionicons
          name="language-outline"
          size={20}
          color={theme === 'dark' ? '#FFF' : '#333'}
        />
        <Text style={dynamicStyles.infoText}>{texts[language].language}</Text>
      </TouchableOpacity>

    
      <TouchableOpacity
        style={dynamicStyles.infoContainer}
        onPress={() => showSettingAlert(texts[language].privacy)}
      >
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color={theme === 'dark' ? '#FFF' : '#333'}
        />
        <Text style={dynamicStyles.infoText}>{texts[language].privacy}</Text>
      </TouchableOpacity>

    
      <TouchableOpacity
        style={dynamicStyles.infoContainer}
        onPress={() => showSettingAlert(texts[language].security)}
      >
        <Ionicons
          name="shield-checkmark-outline"
          size={20}
          color={theme === 'dark' ? '#FFF' : '#333'}
        />
        <Text style={dynamicStyles.infoText}>{texts[language].security}</Text>
      </TouchableOpacity>

   
      <TouchableOpacity
        style={dynamicStyles.infoContainer}
        onPress={() => showSettingAlert(texts[language].accessibility)}
      >
        <Ionicons
          name="accessibility-outline"
          size={20}
          color={theme === 'dark' ? '#FFF' : '#333'}
        />
        <Text style={dynamicStyles.infoText}>{texts[language].accessibility}</Text>
      </TouchableOpacity>

  
      <TouchableOpacity
        style={dynamicStyles.infoContainer}
        onPress={() => showSettingAlert(texts[language].notifications)}
      >
        <Ionicons
          name="notifications-outline"
          size={20}
          color={theme === 'dark' ? '#FFF' : '#333'}
        />
        <Text style={dynamicStyles.infoText}>{texts[language].notifications}</Text>
      </TouchableOpacity>

   
      <TouchableOpacity
        style={[dynamicStyles.infoContainer, dynamicStyles.backButton]}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back-circle-outline"
          size={20}
          color={theme === 'dark' ? '#FFF' : '#333'}
        />
        <Text style={dynamicStyles.infoText}>{texts[language].back}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;