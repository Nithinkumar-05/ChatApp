import ChatRoomHeader from '@/components/ChatRoomHeader';
import MessageList from '@/components/MessageList';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { View,Text, StatusBar } from 'react-native';

const ChatRoom = () => {
    const item = useLocalSearchParams();
    const [messages,SetMessages] = useState([]);
    //console.log('item:',item);
    const router = useRouter();
    return ( <View>
        <StatusBar style="dark"/>
        <ChatRoomHeader user={item} router={router}/>
        <View className='h-3 border-b border-neutral-300'/>
        <View className='flex-1 justify-between bg-neutral-100 overflow-visible'>

            <MessageList messages={messages}/>
        </View>
    </View> );
}
 
export default ChatRoom;