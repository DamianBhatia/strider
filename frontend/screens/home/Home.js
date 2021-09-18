import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Animated, PanResponder, Dimensions } from 'react-native'
import styles from './styles'
import Header from '../../components/header/Header'
import JobCard from '../../components/jobCard/JobCard'
import ActionButton from '../../components/actionButton/ActionButton'
import { SafeAreaView } from 'react-navigation'
import axios from 'axios'

const baseURL = 'https://southportstrive.herokuapp.com/jobs/get';

export default Home = () => {
    const [jobs, setJobs] = useState([]); // jobs data

    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width;

    // Creating swipe animation
    const position = useState(new Animated.ValueXY())[0];

    const panResponder = useState(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: Animated.event([
                null,
                { dx: position.x, dy: position.y }
            ],
            {useNativeDriver: false}),
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 150) {
                    Animated.spring(position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
                        useNativeDriver: false
                    }).start(() => {
                        setJobs(jobs => jobs.filter((_, i) => i != 0))
                        position.setValue({x: 0, y: 0})
                    })
                } else if (gestureState.dx < -150) {
                    Animated.spring(position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
                        useNativeDriver: false
                    }).start(() => {
                        setJobs(jobs => jobs.filter((_, i) => i != 0))
                        position.setValue({x: 0, y: 0})
                    })              
                } else {
                    Animated.spring(position, {
                        toValue: { x: 0, y: 0},
                        friction: 4,
                        useNativeDriver: false
                    }).start()
                }
            },
        })
    )[0];

     /**
     * Card rotate and move animation.
     */
      const [rotateAndTranslateAnimation, setRotateAndTranslateAnimation] = useState({transform: [{rotate: position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: ['-10deg', '0deg', '10deg'],
        extrapolate: 'clamp'
    })}, {translateX: position.x}, {translateY: position.y}]});

    /**
     * Change opacity of Like tag on card animation.
     */
     const [nopeOpacityAnimation, setNopeOpacityAnimation] = useState(position.x.interpolate({
         inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
         outputRange: [1,0,0],
         extrapolate: 'clamp'
     }));

    /**
     * Change opacity of Nope tag on card animation.
     */
     const [likeOpacityAnimation, setLikeOpacityAnimation] = useState(position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [0,0,1],
        extrapolate: 'clamp'
    }));

    /**
     * Change opacity of the next card animation.
     */
     const [nextCardOpacityAnimation, setNextCardOpacityAnimation] = useState({opacity: position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1,0,1],
        extrapolate: 'clamp'
    })});

    /**
     * Change scale of the next card animation.
     */
     const [nextCardScaleAnimation, setNextCardScaleAnimation] = useState({transform: [{scale: position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1,0.8,1],
        extrapolate: 'clamp'
    })}]});

    /**
     * Retrieves jobs data from database
     */
    const getJobs = () => {
        axios.get(baseURL)
            .then(response => setJobs(response.data))
            .catch(error => console.log(error))
    }

    /**
     * When page first loads retrieve jobs data from database
     */
    useEffect(() => {
       getJobs();
    }, []);

    // Component has just mounted so useEffect has not run yet to populate the jobs.
    if(jobs.length == 0) {
        return (
            <SafeAreaView>
                <StatusBar />
                <Header />
                <View style={{width: SCREEN_WIDTH, height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '90%', height: '70%'}}>
                        <Text style={{fontFamily: 'Montserrat-Medium-500', color: 'gray', fontSize: 32, textAlign: 'center'}}>No New Jobs To Display :(</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    return (
    <SafeAreaView>
        <StatusBar />
        <Header />

        <View style={{width: SCREEN_WIDTH, height: '90%', display: 'flex', alignItems: 'center', paddingVertical: '20%'}}>
            <View style={{width: '90%', height: '70%'}}>
                {jobs.map((item, i) => {
                    if (i < 0) {return null}
                    else if (i == 0) {
                        return  <Animated.View key={i} style={[{position: 'absolute'}, rotateAndTranslateAnimation]} {...panResponder.panHandlers}>
                                <Animated.View style={{opacity: nopeOpacityAnimation, transform: [{ rotate: "30deg" }],position: "absolute",top: 50,right: 40,zIndex: 1000}}>
                                    <Text style={{borderWidth: 1, borderRadius: 10, borderColor: "#F76E5E",color: "#F76E5E",fontSize: 32,fontWeight: "800",padding: 10}}>SKIP</Text>
                                </Animated.View>
                                <Animated.View style={{opacity: likeOpacityAnimation, transform: [{ rotate: "-30deg" }],position: "absolute",top: 50,left: 40, zIndex: 1000}}>
                                    <Text style={{borderWidth: 1, borderRadius: 10, borderColor: "#00FFB7",color: "#00FFB7",fontSize: 32,fontWeight: "800",padding: 10}}>APPLY</Text>
                                </Animated.View>
                                <JobCard jobTitle={item.position} jobLocation={item.location} />
                            </Animated.View>
                    } else {
                        return  <Animated.View key={i} style={[{position: 'absolute'}, nextCardScaleAnimation, nextCardOpacityAnimation]}>
                                    <JobCard jobTitle={item.position} jobLocation={item.location} />
                                </Animated.View>
                    }
                }).reverse()}
            </View>
        </View>
        

        {/* <View style={styles.bottomContainer}>
            <ActionButton size={60} icon='trash-alt' color='#fc6fb8' />
            <ActionButton size={60} icon='heart' color='#03fcba' />
        </View> */}
    </SafeAreaView>
    )
}