import { blurhash } from '@/utils/common';
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ChatItem = ({ item, index, router, noBorder }) => {
    //console.log(item);
    const openChatRoom=()=>{
        router.push({pathname:'/chatRoom',params:item});
    }
    return (
        <TouchableOpacity 
            onPress={openChatRoom}
            style={[
                styles.container,
                noBorder ? null : styles.withBorder,
            ]}
        >
            {/* Avatar */}
            {/* <Image 
                source={{uri:item?.profileUrl}} 
                style={styles.avatar}
            /> */}
            <Image
                source={{uri:item?.profileUrl}}
                placeholder={blurhash} 
                style={styles.avatar}
                transition={500}
            />
            
            {/* Content Container */}
            <View style={styles.contentContainer}>
                {/* Top Row: User Name and Time */}
                <View style={styles.topRow}>
                    <View>
                        <Text style={styles.userName}>{item.username}</Text>
                        <Text style={styles.lastMessage}>Last Item</Text>
                    </View>
                    <Text style={styles.time}>Time</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(12),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(4),
        paddingVertical: hp(1.5),
        backgroundColor: '#ffffff', // White background
    },
    withBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5', // Neutral-200
    },
    avatar: {
        height: hp(8),
        width: hp(8),
        borderRadius: hp(4), // Makes it perfectly round
    },
    contentContainer: {
        flex: 1,
        marginLeft: wp(3),
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userName: {
        fontSize: hp(1.8),
        fontWeight: '500',
        color: '#1e1e1e', // Neutral-800 equivalent
    },
    lastMessage: {
        fontSize: hp(1.5),
        fontWeight: '400',
        color: '#737373', // Neutral-500 equivalent
        marginTop: hp(0.5),
    },
    time: {
        fontSize: hp(1.5),
        fontWeight: '400',
        color: '#1e1e1e', // Neutral-800 equivalent
    },
});

export default ChatItem;
