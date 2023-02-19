import { Text, View, StyleSheet } from "react-native";
import React from 'react';
import Video from 'react-native-video';
import { useState } from "react";

function Webcam(props){


    return(
        <View style={styles.container}>
            <Video
                // source={{
                // uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1",
                // }}
                source={require('../../assets/pothole_video.mp4')}
                style={styles.backgroundVideo}
                fullscreen={true}
                resizeMode={'contain'}
                repeat={true}
                controls={false}
                onBuffer={this.videoBuffer}
                ref={(ref) => {
                    this.player = ref
                }}
                paused={props.pause}
            />
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default Webcam;
