import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useScreen } from '../context/ScreenContext';

const EnterNumber = () => {
  const { setScreen } = useScreen();
  const [number, setNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your mobile number</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/flag.png')} style={styles.flagIcon} />
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          value={number}
          onChangeText={setNumber}
          placeholder="Enter your number"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setScreen('otp')}>
        <Text style={styles.buttonText}>➜</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#181725', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#E2E2E2', width: '90%', paddingVertical: 10 },
  flagIcon: { width: 24, height: 16, marginRight: 8 },
  countryCode: { fontSize: 18, fontWeight: 'bold', color: '#181725', marginRight: 8 },
  input: { flex: 1, fontSize: 18 },
  button: { backgroundColor: '#53B175', paddingVertical: 15, width: '90%', borderRadius: 50, alignItems: 'center', marginTop: 30 },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});

export default EnterNumber;
