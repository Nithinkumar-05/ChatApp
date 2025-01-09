import React, { useRef,useState } from 'react';
import { View, Image, StatusBar,Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from '@/components/Loading';
import CustomKeyboard from '@/components/CustomKeyboard';
const SignIn = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const handleSubmit = async ()=>{
        if(!emailRef.current || !passwordRef.current){
            alert("Please fill all the fields");
            return;
        }
        //login


    }
    return (
        <CustomKeyboard>
            <View className="flex-1 justify-center items-center">
                <StatusBar barStyle="dark-content" />
                <View className='flex-1 gap-2'>
                    {/* SignIn Image */}
                    <View className='items-center' style={{ paddingTop: hp(2) }}>
                        <Image
                            style={{ height: hp(45), width: wp(80) }}
                            source={require('../assets/images/LoginPage.jpg')}
                            resizeMode="contain" // Adjust the image orientation
                        />
                    </View>
                    <View className='gap-2'>
                        <Text className='text-3xl font-bold tracking-wider text-center text-neutral-700'>Sign In</Text>
                        <View className='gap-4'>
                        <View style={{ height: hp(7) }} className='flex-row gap-4 bg-neutral-100 items-center rounded-2xl px-4'>
                                <Octicons name='mail' size={hp(2.7)} color="gray" />
                                <TextInput
                                    onChangeText={(text)=>emailRef.current=text}
                                    style={{ fontSize: hp(2) }}
                                    className='flex-1 font-semibold text-neutral-700'
                                    placeholder='Email'
                                    placeholderTextColor={'gray'}
                                />
                            </View>
                            <View className='gap-3'>
                                <View style={{height:hp(7)}} className='flex-row gap-5 bg-neutral-100 items-center rounded-2xl px-4'>
                                    <Octicons name='lock' size={hp(2.7)} color="gray"/>
                                    <TextInput 
                                        onChangeText={(text)=>passwordRef.current=text}
                                        styple={{fontSize:hp(2)}}
                                        className='flex-1 font-semibold text-neutral-700'
                                        placeholder='Password'
                                        secureTextEntry
                                        placeholderTextColor={'gray'}
                                        />
                                </View>
                                <Text className='font-semibold text-neutral-500 text-right'>Forgot Password?</Text>
                            </View>
                            
                        </View>
                    </View>
                    <View>
                        {
                            isLoading?(
                                <View className='flex-row justify-center items-center gap-2'>
                                    <Loading size={hp(8)}/>
                                </View>
                            ):(
                                <TouchableOpacity onPress={handleSubmit} className='bg-indigo-500 rounded-2xl p-3 items-center'>
                                        <Text className='text-white font-semibold tracking-wider'>Submit</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    
                    {/* SignUp */}
                    <View className='flex-row items-center justify-center gap-2'>
                        <Text style={{fontSize:hp(1.8)}}className='text-neutral-500'>Don't have an account?</Text>
                        <Pressable onPress={()=>router.push('/signUp')}>
                        <Text style={{fontSize:hp(1.8)}}className='text-indigo-500 font-semibold'>Sign Up</Text>
                        </Pressable>
                        
                    </View>    
                </View>
            </View>
        </CustomKeyboard>
    );
}

export default SignIn;