import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function SignInScreen(props) {
    return (
        <Screen style={styles.screen}>
            <Text>
                Hello Baby!
            </Text>
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


export default SignInScreen;