import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },

    title: {
        fontSize: 30,
        fontFamily: 'Montserrat-Bold-700',
        color: COLORS.primary
    }
})