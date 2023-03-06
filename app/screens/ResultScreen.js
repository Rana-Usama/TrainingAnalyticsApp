import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function ResultScreen(props) {
    return (
        <Screen style={styles.screen}>
            {/* Nav */}
            <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("BMICalculationScreen")} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.5) }} color="black" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0 }} >
                    <Entypo name="menu" style={{ fontSize: RFPercentage(4) }} color="black" />
                </TouchableOpacity>
            </View>

            {/* Title */}
            <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                    Ergebnis
                </Text>
            </View>

            {/* Calculated BMI */}
            <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', width: RFPercentage(30), height: RFPercentage(6.5), borderColor: Colors.black, borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(1) }} >
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3), marginLeft: RFPercentage(2) }} >
                        Ihr BMI liegt bei
                    </Text>
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3), marginLeft: RFPercentage(1), fontWeight: 'bold' }} >
                        23,9
                    </Text>
                </View>
            </View>

            <View style={{ marginTop: RFPercentage(6), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2) }} >
                    Sehr gutl lhr Gewicht leigt im
                </Text>
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: 'bold', marginLeft: RFPercentage(1) }} >
                    Normalbereich
                </Text>
            </View>

            {/* Table */}
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(8), width: '98%', height: RFPercentage(40), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.2) }} >
                <Text style={{ marginTop: RFPercentage(2), color: Colors.black, fontWeight: 'bold', fontSize: RFPercentage(2.4) }} >
                    BMI Tabelle
                </Text>

                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }} >
                        <View style={{ flexDirection: 'row', width: '96%', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(2) }} >
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start' }} >
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), fontWeight: 'bold' }} >
                                    Alter
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    15-24 jahre
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    22-24 jahre
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    17-27 jahre
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    18-20 jahre
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    15-24 jahre
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: RFPercentage(1) }} >
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), fontWeight: 'bold' }} >
                                    Underweight
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`<18`}
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`<19`}
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`<20`}
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`<21`}
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`<22`}
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: RFPercentage(1) }} >
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), fontWeight: 'bold' }} >
                                    Normalweight
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    18-19
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    20-21
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    21-22
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    23-24
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    24-25
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: RFPercentage(1) }} >
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), fontWeight: 'bold' }} >
                                    Underweight
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    17-24
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    18-27
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    15-22
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    19-21
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    15-24
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: RFPercentage(1) }} >
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), fontWeight: 'bold' }} >
                                    Underweight
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`>19`}
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`>22`}
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`>26`}
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`>20`}
                                </Text>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.5), marginTop: RFPercentage(2) }} >
                                    {`>17`}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
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

export default ResultScreen;