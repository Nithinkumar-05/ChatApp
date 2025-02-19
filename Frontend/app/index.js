import React from 'react';
import { View, Text, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const SplashScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      {/* <Image
        source={require('./path-to-your-logo.png')} // Replace with your logo path
        style={{ width: 100, height: 100 }}
      /> */}
      <Text className="text-black text-4xl font-bold mt-4">ChatApp</Text>
      <ActivityIndicator size="large" color="#6C63FF" className="mt-6" />
    </View>
  );
};

export default SplashScreen;
