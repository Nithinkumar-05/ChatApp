import { Slot, useRouter, useSegments } from "expo-router";
import "../global.css";
import { View } from "react-native";
import { useAuth,AuthProvider } from "@/routes/AuthContext";
import { useEffect } from "react";

const MainLayout = () => {
    const { user,isAuthenticated } = useAuth();
    const router = useRouter();
    const segments = useSegments();
    useEffect(()=>{
        if(typeof isAuthenticated=='undefined'){
            return;
        }
        const inApp=segments[0]=='(app)';   
        if(isAuthenticated && !inApp){
            //redirect to home
            router.replace('home');
        }else if(isAuthenticated==false){
            //navigate to signin
            router.replace('signIn');
        }
    },[isAuthenticated]);
   
   return (
       <View className="flex-1">
           <Slot/>
       </View>
   );
};

export default function RootLayout(){
    return (
        <AuthProvider>
            <MainLayout/>
        </AuthProvider>
    );
};