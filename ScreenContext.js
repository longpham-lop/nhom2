import React, { createContext, useState, useContext } from 'react';

// Tạo Context
const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [screen, setScreen] = useState('splash'); // Mặc định là màn hình Splash

  return (
    <ScreenContext.Provider value={{ screen, setScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};

// Hook để dùng context dễ dàng hơn
export const useScreen = () => useContext(ScreenContext);
