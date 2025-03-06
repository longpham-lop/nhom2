import React from 'react';
import { ScreenProvider, useScreen } from './context/ScreenContext';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';
import SignIn from './components/SignIn';
import EnterNumber from './components/EnterNumber';
import Verification from './components/Verification';

const MainScreen = () => {
  const { screen } = useScreen();

  return (
    <>
      {screen === 'splash' && <SplashScreen />}
      {screen === 'onboarding' && <Onboarding />}
      {screen === 'signin' && <SignIn />}
      {screen === 'number' && <EnterNumber />}
      {screen === 'otp' && <Verification />}
    </>
  );
};

const App = () => (
  <ScreenProvider>
    <MainScreen />
  </ScreenProvider>
);

export default App;
