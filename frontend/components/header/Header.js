import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { Ionicons } from '../../node_modules/@expo/vector-icons'
import { Feather } from '../../node_modules/@expo/vector-icons'
import { COLORS } from '../../utilities/colors'

export default Header = () => (
        <View style={styles.container}>
            <View style={styles.left}>
                <Ionicons name="menu" size={32} color={COLORS.primary} />
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>strider</Text>
            </View>
            <View style={styles.right}>
                <Feather name="message-circle" size={32} color={COLORS.primary} />
            </View>
        </View>
)
