import HomeHeader from '@/components/HomeHeader';
import { Stack } from 'expo-router';
import { View,Text } from 'react-native';
const _layout = () => {
    return ( <Stack>
        <Stack.Screen name='home' 
        options={{title:'Home',
            header:()=><HomeHeader/>
        }}/>
    </Stack> );
}
 
export default _layout;