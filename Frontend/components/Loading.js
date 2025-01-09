import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = ({ size }) => {
    return (
        <View style={{ height: size, aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView
                source={require('../assets/images/loading.json')}
                autoPlay
                loop
                style={{ width: size, height: size }}
            />
        </View>
    );
}

export default Loading;