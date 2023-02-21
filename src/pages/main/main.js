import { Text, TouchableOpacity, View } from "react-native"
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Webcam from "./webcam";
import { useState } from "react";

function Main(){

    const [pause, setPause] = useState(false);
    const navigation = useNavigation();

    return(
        <> 
        <View style={{backgroundColor: "#7286D3",}}>
            <Text style={{fontSize: 50, textAlign: "center", color: "white", }}>RoadKeeper</Text>
        </View>
        <View style={{backgroundColor: "#FFF2F2",}}>
        </View>
            <Webcam pause={pause}/>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', backgroundColor: "#E5E0FF", }}>
                <TouchableOpacity onPress={()=>{
                    setPause(false);
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", padding: 10,}}>시작</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    setPause(true);
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", padding: 10, }}>끝</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Result')
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", padding: 10, }}>결과보기</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Main;