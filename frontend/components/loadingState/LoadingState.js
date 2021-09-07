import React from "react";
import { ActivityIndicator, View, Text} from "react-native";
import { COLORS } from "../../utilities/colors";
import styles from './styles'
/**
 * this is a loading state for the whole app. 
 * @param {bool} loading weather the app is currently loading or not
 * @returns {jsx} the laoding component
 */
const LoadingState = ({loading}) => (
  <View style={styles.container}>
    <View style={styles.loading}>
        <ActivityIndicator  hidesWhenStopped = {true} animating = {loading} size="large" color={'#0C9FB1'} />
        <View style={styles.loadingText}>
            <Text style={styles.Text}>Loading...</Text>
        </View>
    </View>
  </View>
);


export default LoadingState;