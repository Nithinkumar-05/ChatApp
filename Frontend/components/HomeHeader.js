import React from 'react';
import { View, Text, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { blurhash } from '@/utils/common';
import {
    Menu,
    MenuOptions,
    MenuTrigger,
} from 'react-native-popup-menu';
import { useAuth } from '@/routes/AuthContext';
import CustomMenu from './CustomMenu';
import { AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const isIos = Platform.OS === 'ios';

const HomeHeader = () => {
    const { top } = useSafeAreaInsets();
    const { user, logout } = useAuth();
    
    const handleProfile = () => {
        // Profile handling logic
    }
    
    const handleLogout = async () => {
        await logout();
    }

    return (
        <View style={{ elevation: 8 }}>
            <LinearGradient
                colors={['#4F46E5', '#6366F1']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    paddingTop: isIos ? top : top ,
                    paddingBottom: hp(7),
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: wp(5),
                    marginTop: hp(1),
                }}>
                    <View>
                        <Text style={{
                            fontSize: hp(3.5),
                            color: '#ffffff',
                            fontWeight: '600',
                            letterSpacing: 0.5,
                        }}>
                            Chats
                        </Text>

                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: wp(3),
                    }}>
                        

                        <Menu>
                            <MenuTrigger customStyles={{
                                triggerWrapper: {
                                    padding: 0,
                                }
                            }}>
                                <View style={{
                                    borderWidth: 2,
                                    borderColor: '#E0E7FF',
                                    borderRadius: hp(2.5),
                                    padding: 2,
                                }}>
                                    <Image
                                        style={{
                                            height: hp(4.3),
                                            aspectRatio: 1,
                                            borderRadius: hp(2),
                                        }}
                                        source={{ uri: user?.profileUrl }}
                                        placeholder={blurhash}
                                        transition={200}
                                    />
                                </View>
                            </MenuTrigger>
                            <MenuOptions customStyles={{
                                optionsContainer: {
                                    borderRadius: 15,
                                    padding: 5,
                                    marginTop: hp(4), // Add space between trigger and menu
                                    backgroundColor: '#ffffff',
                                    width: wp(50), // Set a fixed width for the menu
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                },
                                optionWrapper: {
                                    padding: hp(1),
                                }
                            }}>
                                <CustomMenu 
                                    text="Profile"
                                    action={handleProfile}
                                    value={null}
                                    icon={<Feather name='user' size={hp(2.5)} color='#737373'/>}
                                />
                                <Divider />
                                <CustomMenu 
                                    text="Logout"
                                    action={handleLogout}
                                    value={null}
                                    icon={<AntDesign name='logout' size={hp(2.5)} color='#737373'/>}
                                />
                            </MenuOptions>
                        </Menu>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

const Divider = () => {
    return (
        <View style={{
            height: 1,
            width: '100%',
            backgroundColor: '#E5E5E5',
            marginVertical: 5,
        }} />
    );
}

export default HomeHeader;