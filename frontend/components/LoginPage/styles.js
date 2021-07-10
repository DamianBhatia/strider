import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'

export default styles = StyleSheet.create({
    title: {
        fontSize: 60,
        fontFamily: 'Montserrat-Bold-700',
        color: COLORS.background,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        height: "8%",
        marginTop: "50%",
        position: 'relative',
    },
    TextInputContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: "5%",
        alignItems: 'center',
        marginTop: "10%"

    },
    TextInput: {
        color: COLORS.background,
        borderBottomColor: COLORS.background,
        borderBottomWidth: 2,
        fontSize: 30,
        marginBottom: "10%",
        paddingRight: "50%"
    },
    button: {
        backgroundColor: COLORS.background,
        borderRadius: 20,
        alignItems: 'center',
        padding: "3%",
        marginHorizontal: "15%",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.primary
    }
    
})