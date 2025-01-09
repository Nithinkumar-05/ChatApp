import { Stack } from 'expo-router';
import { View,Text } from 'react-native';
const _layout = () => {
    return ( <Stack>
        <Stack.Screen name='home' options={{title:'Home'}}/>
    </Stack> );
}
 
export default _layout;