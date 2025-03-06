import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useScreen } from '../context/ScreenContext';

const Onboarding = () => {
  const { setScreen } = useScreen();

  return (
    <View style={styles.container}>
      {/* Ảnh nền tràn màn hình */}
      <Image source={require('../assets/anh.png')} style={styles.backgroundImage} />
      
      {/* Nội dung phía trên ảnh */}
      <View style={styles.overlay}>
        <Image source={require('../assets/carot.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} onPress={() => setScreen('signin')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },

  // Ảnh nền full màn hình
  backgroundImage: { 
    ...StyleSheet.absoluteFillObject, // Tràn toàn bộ màn hình
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover', 
  },

  // Overlay chứa nội dung
  overlay: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#fff', textAlign: 'center', marginBottom: 20 },
  
  button: { 
    backgroundColor: '#53B175', 
    paddingVertical: 15, 
    paddingHorizontal: 50, 
    borderRadius: 10 
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default Onboarding;
