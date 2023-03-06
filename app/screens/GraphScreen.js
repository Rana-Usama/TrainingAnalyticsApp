import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SelectList } from 'react-native-dropdown-select-list'

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function GraphScreen(props) {

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Vergangene 28 Tage' },
    ]
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
            <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                    Statistiken
                </Text>
            </View>

            <View style={{ width: RFPercentage(40), justifyContent: 'center', alignItems: 'center' }} >
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    boxStyles={{ borderColor: Colors.grey, width: RFPercentage(40), marginTop: RFPercentage(3), backgroundColor: Colors.grey }}
                />
            </View>

            <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.6) }} >
                    Minuten
                </Text>
            </View>

            <Image style={{ marginTop: RFPercentage(3), width: RFPercentage(40), height: RFPercentage(30) }} source={require('../../assets/Images/graph.jpg')} />

            <View style={{ marginTop: RFPercentage(2), width: '80%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: '600' }} >
                    Tage
                </Text>
            </View>

            <View style={{ marginTop: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'flex-start', width: '70%' }} >
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ width: RFPercentage(2), height: RFPercentage(2), borderRadius: RFPercentage(20), backgroundColor: '#32cd32' }} />
                    <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2), fontWeight: '500' }} >
                        Yoga
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2) }} >
                    <View style={{ width: RFPercentage(2), height: RFPercentage(2), borderRadius: RFPercentage(20), backgroundColor: '#FF69B4' }} />
                    <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2), fontWeight: '500' }} >
                        CardioTraining
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2) }} >
                    <View style={{ width: RFPercentage(2), height: RFPercentage(2), borderRadius: RFPercentage(20), backgroundColor: '#4169E1' }} />
                    <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2), fontWeight: '500' }} >
                        Kraftraining
                    </Text>
                </View>
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
    },

})

export default GraphScreen;