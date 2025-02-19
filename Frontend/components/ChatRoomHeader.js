import { Entypo, Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ChatRoomHeader = ({ user, router }) => {
    return (
        <>
            <Stack.Screen
                options={{
                    title: '',
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <View className="flex-row items-center gap-4 m-0 p-0 ">
                            {/* Back Button */}
                            
                                <Entypo name="chevron-left" size={hp(4)} color="#737373"
                                    onPress={() => {
                                        if (router?.back) {
                                            router.back();
                                        } else {
                                            console.error("Router is not defined or `back` method is unavailable.");
                                        }
                                    }}
                                
                                />
                            
                            {/* User Avatar and Username */}
                            <View className="flex-row items-center gap-4">
                                <Image
                                    source={{ uri: user?.profileUrl }}
                                    className="w-10 h-10 rounded-full"
                                />
                                <Text style={{ fontSize: hp(2.5) }} className="text-neutral-700 font-medium">
                                    {user?.username}
                                </Text>
                            </View>
                        </View>
                    ),
                    headerRight: () => (
                        <View className="flex-row items-center gap-4 m-0 p-0">
                            {/* Video Call Icon */}
                            <TouchableOpacity>
                                <Feather name="video" size={hp(3)} color="#737373" />
                            </TouchableOpacity>
                            {/* Phone Call Icon */}
                            <TouchableOpacity>
                                <Feather name="phone" size={hp(3)} color="#737373" />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
        </>
    );
};

export default ChatRoomHeader;
