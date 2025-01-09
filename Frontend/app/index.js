import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const SplashScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <ActivityIndicator size="large" color="#ffffff" />
      <Text className="text-white text-2xl mt-4">Loading...</Text>
    </View>
  );
};

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold">Home</Text>
    </View>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return isLoading ? <SplashScreen /> : <Home />;
};

export default App;