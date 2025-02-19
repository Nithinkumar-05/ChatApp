import React, { useRef,useState } from 'react';
import { View, Image, StatusBar,Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from '@/components/Loading';
import CustomKeyboard from '@/components/CustomKeyboard';
import { useAuth } from '@/routes/AuthContext';
const SignUp = () => {
    const router = useRouter();
    const {register} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const usernameRef = useRef("");
    const profileRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const handleRegister = async ()=>{
        if( !usernameRef|| !profileRef || !emailRef.current || !passwordRef.current){
            alert("Please fill all the fields");
            return;
        }
        //Sign Up
        setIsLoading(true);
        
        let response = await register(emailRef.current,passwordRef.current,usernameRef.current,profileRef.current);
        console.log(response);
        setIsLoading(false);
        if(!response.success){
            alert(`Sign Up Error: ${response.msg}`);

            return;
        }
        //router.push('/signIn');
        
    }
    return (
        <CustomKeyboard>
            <View className="flex-1  items-center">
                <StatusBar barStyle="dark-content" />
                <View className='flex-1 gap-3'>
                    {/* SignIn Image */}
                    <View className='items-center' style={{ paddingTop: hp(2) }}>
                        <Image
                            style={{ height: hp(30), width: wp(80) }}
                            source={require('../assets/images/signup.jpg')}
                            resizeMode="contain" 
                        />
                    </View>
                    <View className='gap-2'>
                        <Text className='text-3xl font-bold tracking-wider text-center text-neutral-700'>Sign Up</Text>
                        <View className='gap-4'>
                        <View style={{ height: hp(7) }} className='flex-row gap-4 bg-neutral-100 items-center rounded-2xl px-4'>
                                <Feather name='user' size={hp(2.7)} color="gray" />
                                <TextInput
                                    onChangeText={(text)=>usernameRef.current=text}
                                    style={{ fontSize: hp(2) }}
                                    className='flex-1 font-semibold text-neutral-700'
                                    placeholder='User Name'
                                    placeholderTextColor={'gray'}
                                />
                            </View>
                            
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

                            <View style={{ height: hp(7) }} className='flex-row gap-4 bg-neutral-100 items-center rounded-2xl px-4'>
                                <Feather name='image' size={hp(2.7)} color="gray" />
                                <TextInput
                                    onChangeText={(text)=>profileRef.current=text}
                                    style={{ fontSize: hp(2) }}
                                    className='flex-1 font-semibold text-neutral-700'
                                    placeholder='Profile Url'
                                    placeholderTextColor={'gray'}
                                />
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
                                <TouchableOpacity onPress={handleRegister} className='bg-indigo-500 rounded-2xl p-3 items-center'>
                                        <Text className='text-white font-semibold tracking-wider'>Sign Up</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    
                    {/* SignUp */}
                    <View className='flex-row items-center justify-center gap-2'>
                        <Text style={{fontSize:hp(1.8)}}className='text-neutral-500'>Already have an account?</Text>
                        <Pressable onPress={()=>router.push('/signIn')}>
                        <Text style={{fontSize:hp(1.8)}}className='text-indigo-500 font-semibold'>Sign In</Text>
                        </Pressable>
                        
                    </View>    
                </View>
            </View>
        </CustomKeyboard>
    );
}

export default SignUp;