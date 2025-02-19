import React, { useEffect, useState } from 'react';
import { useAuth } from '@/routes/AuthContext';
import { View, Text, StatusBar, ActivityIndicator } from 'react-native';
import ChatList from '@/components/ChatList';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '@/firebaseConfig';

const Home = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.userId) {
            getUsers();
        } else {
            console.warn('User ID is undefined.');
        }
    }, [user?.userId]);

    const getUsers = async () => {
        try {
            setLoading(true);

            if (!user?.userId) {
                console.error('Error: User ID is undefined.');
                return;
            }

            const q = query(usersRef, where('userId', '!=', user.userId));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="light" />
            {loading ? (
                <View className="flex items-center justify-center" style={{ marginTop: hp(30) }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={{ marginTop: hp(2), color: '#737373', fontSize: hp(2) }}>
                        Loading ...
                    </Text>
                </View>
            ) : users.length > 0 ? (
                <ChatList users={users} />
            ) : (
                <View className="flex items-center justify-center" style={{ marginTop: hp(30) }}>
                    <Text style={{ color: '#737373', fontSize: hp(2) }}>
                        No users found.
                    </Text>
                </View>
            )}
        </View>
    );
};

export default Home;
