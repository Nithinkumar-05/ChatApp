import { View, Text, Pressable } from 'react-native';
import { MenuOption } from 'react-native-popup-menu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomMenu = ({ text, action, value, icon }) => {
    return (
        <MenuOption 
            onSelect={() => action(value)} // Attach action here
            customStyles={{
                optionWrapper: {
                    backgroundColor: 'transparent', // Set transparent background for the wrapper
                },
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: hp(1.2),
                    paddingHorizontal: wp(3),
                    backgroundColor: 'transparent',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: wp(10),
                    }}
                >
                    <View style={{ opacity: 0.8 }}>{icon}</View>
                    <Text
                        style={{
                            fontSize: hp(1.8),
                            fontWeight: '500',
                            color: '#3F3F46', // zinc-700
                            letterSpacing: 0.3,
                        }}
                    >
                        {text}
                    </Text>
                </View>
            </View>
        </MenuOption>
    );
};

export default CustomMenu;
