import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native-gesture-handler';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function BMICalculationScreen(props) {
    return (
        <Screen style={styles.screen}>
            {/* Nav */}
            <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("HomeScreen")} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.5) }} color="black" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0 }} >
                    <Entypo name="menu" style={{ fontSize: RFPercentage(4) }} color="black" />
                </TouchableOpacity>
            </View>
            {/* Title */}
            <View style={{ marginTop: RFPercentage(4), width: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                    Jetzt den BMI berechnen
                </Text>
            </View>

            {/* Calculation Boxes */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }} >

                    <View style={{ marginTop: RFPercentage(8), width: '80%', height: RFPercentage(60), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.2), justifyContent: 'flex-start', alignItems: 'center' }} >
                        {/* First */}
                        <Text style={{ marginTop: RFPercentage(6), color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: 'bold' }} >
                            Alter
                        </Text>
                        <View style={{ marginLeft: RFPercentage(3), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(1) }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), height: RFPercentage(6), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(1.6) }} >
                                <TextInput placeholder='Enter' placeholderTextColor={Colors.grey} style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} />
                            </View>
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2), left: RFPercentage(1), fontWeight: '600' }} >
                                Jahre
                            </Text>
                        </View>
                        {/* Second */}
                        <Text style={{ marginTop: RFPercentage(6), color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: 'bold' }} >
                            KorpergroBe
                        </Text>
                        <View style={{ marginLeft: RFPercentage(2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(1) }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), height: RFPercentage(6), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(1.6) }} >
                                <TextInput placeholder='Enter' placeholderTextColor={Colors.grey} style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} />
                            </View>
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2), left: RFPercentage(1), fontWeight: '600' }} >
                                cm
                            </Text>
                        </View>
                        {/* Third */}
                        <Text style={{ marginTop: RFPercentage(6), color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: 'bold' }} >
                            Korpergewicht
                        </Text>
                        <View style={{ marginLeft: RFPercentage(2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(1) }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(20), height: RFPercentage(6), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(1.6) }} >
                                <TextInput placeholder='Enter' placeholderTextColor={Colors.grey} style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: 'bold' }} />
                            </View>
                            <Text style={{ color: Colors.black, fontSize: RFPercentage(2), left: RFPercentage(1), fontWeight: '600' }} >
                                kg
                            </Text>
                        </View>
                        {/* Buttons */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("ResultScreen")} style={{ marginTop: RFPercentage(4), backgroundColor: '#32cd32', width: RFPercentage(20), height: RFPercentage(6), borderRadius: RFPercentage(1.6), justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontWeight: '600' }} >
                                BMI Berechnen
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

export default BMICalculationScreen;