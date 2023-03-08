import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CalendarPicker from 'react-native-calendar-picker';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function SportScreen(props) {

    // Calendar
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const onDateChange = (date, type) => {
        //function to handle the date change
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };

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
                    Sportfortschritte
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }} >

                    <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }} >
                            Geben Sie ein Datum ein
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '80%', height: RFPercentage(5), borderColor: Colors.black, borderWidth: RFPercentage(0.2), borderRadius: RFPercentage(1) }} >
                            {/* <TextInput placeholder='' style={{ width: '100%', marginLeft: RFPercentage(3), color: Colors.black, fontSize: RFPercentage(2) }} /> */}
                            <Text>
                                {selectedStartDate ? selectedStartDate.toString() : '00/00/0000'}
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: RFPercentage(2) }}>
                        <CalendarPicker
                            startFromMonday={true}
                            allowRangeSelection={false}
                            minDate={new Date(2018, 1, 1)}
                            maxDate={new Date(2050, 6, 3)}
                            weekdays={
                                [
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thur',
                                    'Fri',
                                    'Sat',
                                    'Sun'
                                ]}
                            months={[
                                'January',
                                'Febraury',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July',
                                'August',
                                'September',
                                'October',
                                'November',
                                'December',
                            ]}
                            previousTitle="<"
                            nextTitle=">"
                            todayBackgroundColor={Colors.grey}
                            selectedDayColor={'#00A3FF'}
                            selectedDayTextColor="#000000"
                            textStyle={{
                                color: '#000000',
                            }}
                            onDateChange={onDateChange}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(4), backgroundColor: Colors.darkGrey, width: RFPercentage(20), height: RFPercentage(6), borderRadius: RFPercentage(1.1), justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontWeight: '600' }} >
                                OK
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("GraphScreen")} style={{ marginLeft: RFPercentage(2), marginTop: RFPercentage(4), backgroundColor: Colors.darkGrey, width: RFPercentage(20), height: RFPercentage(6), borderRadius: RFPercentage(1.1), justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontWeight: '600' }} >
                                Statistiken
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }} >
                            Herlichen Glukwunsch!
                        </Text>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2), marginTop: RFPercentage(1), fontWeight: 'bold' }} >
                            Sie haben am {selectedStartDate ? selectedStartDate.toString() : '00/00/0000'}

                        </Text>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2), marginTop: RFPercentage(1) }} >
                            30 Minuten Yoga
                        </Text>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2), marginTop: RFPercentage(1) }} >
                            20 Minuten Cardiotraining
                        </Text>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2), marginTop: RFPercentage(1) }} >
                            40 Minuten Krafttraining
                        </Text>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2), marginTop: RFPercentage(1) }} >
                            geschafft!
                        </Text>
                    </View>
                </View>
                <View style={{ marginBottom: RFPercentage(10) }} />
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
    },

})

export default SportScreen;