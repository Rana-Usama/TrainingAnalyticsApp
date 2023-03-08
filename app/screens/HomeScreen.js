import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Slider from '@react-native-community/slider';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {
    return (
        <Screen style={styles.screen}>
            {/* Nav */}
            <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <TouchableOpacity activeOpacity={0.6} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.5) }} color="black" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0 }} >
                    <Entypo name="menu" style={{ fontSize: RFPercentage(4) }} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                {/* BMI Navigation Button */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("BMICalculationScreen")} style={{ marginTop: RFPercentage(5), backgroundColor: Colors.darkGrey2, width: '100%', height: RFPercentage(6), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                        BMI berechnen
                    </Text>
                </TouchableOpacity>

                <View style={{ backgroundColor: '#f9f9f9', width: '100%', height: RFPercentage(24), justifyContent: 'flex-start', alignItems: 'center' }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(4) }}  >
                        <Image style={{ width: RFPercentage(30), height: RFPercentage(11) }} source={require('../../assets/Images/man.png')} />
                    </View>
                    {/* Slider */}
                    <Slider
                        style={{ width: RFPercentage(30), height: RFPercentage(6), marginTop: RFPercentage(2) }}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                </View>

                {/* Sport Navigation Button */}
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("SportScreen")} style={{ marginTop: RFPercentage(5), backgroundColor: Colors.darkGrey2, width: '100%', height: RFPercentage(6), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                        Sportfortschritte
                    </Text>
                </TouchableOpacity>

                {/* Sports icon images */}
                <Image style={{ width: RFPercentage(50), height: RFPercentage(45) }} source={require('../../assets/Images/exc.png')} />
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    }
})


export default HomeScreen;