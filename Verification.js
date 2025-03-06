import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Verification = () => {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <TextInput
        style={styles.input}
        placeholder="----"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#181725', marginBottom: 20 },
  input: { width: '90%', borderBottomWidth: 2, borderBottomColor: '#E2E2E2', padding: 10, fontSize: 18, marginBottom: 30, textAlign: 'center' },
  button: { backgroundColor: '#53B175', paddingVertical: 15, width: '90%', borderRadius: 50, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});

export default Verification;
