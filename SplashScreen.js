import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useScreen } from '../context/ScreenContext';


const SplashScreen = () => {
  const { setScreen } = useScreen();

  useEffect(() => {
    setTimeout(() => {
      setScreen('onboarding');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/carot.png')} style={styles.logo} />
      <Text style={styles.title}>nectar</Text>
      <Text style={styles.subtitle}>online groceries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#53B175' },
  logo: { width: 170, height: 150, marginBottom: 10 },
  title: { fontSize: 40, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 16, color: '#fff', marginTop: -5 },
});

export default SplashScreen;
