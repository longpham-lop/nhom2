import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useScreen } from '../context/ScreenContext';

const SignIn = () => {
  const { setScreen } = useScreen();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/hoa.png')} style={styles.image} />
      <Text style={styles.title}>Get your groceries with nectar</Text>
      
      <View style={styles.inputContainer}>
        <Image source={require('../assets/flag.png')} style={styles.flagIcon} />
        <TextInput
          style={styles.input}
          placeholder='+880'
          keyboardType='phone-pad'
        />
      </View>
      
      <Text style={styles.socialText}>Or connect with social media</Text>
      <TouchableOpacity style={styles.button} onPress={() => setScreen('number')}>
        <Text style={styles.buttonText}>Continue with Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbButton}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 20 },
  image: { width: '100%', height: 250, resizeMode: 'contain', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#181725', textAlign: 'center', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 10, width: '90%', marginBottom: 20 },
  flagIcon: { width: 24, height: 16, marginRight: 10 },
  input: { flex: 1, fontSize: 18, color: '#181725' },
  socialText: { fontSize: 14, color: '#7C7C7C', marginBottom: 20 },
  button: { backgroundColor: '#53B175', paddingVertical: 15, width: '90%', borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  googleButton: { backgroundColor: '#4285F4', paddingVertical: 15, width: '90%', borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  fbButton: { backgroundColor: '#1877F2', paddingVertical: 15, width: '90%', borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default SignIn;
