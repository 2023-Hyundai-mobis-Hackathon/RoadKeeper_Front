import { Text, TouchableOpacity, View, Alert } from "react-native"
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Webcam from "./webcam";
import { useState } from "react";

import axios from "axios";

function Loading() {
    return(
        <>
        <Text>영상 분석 중입니다. 조금만 기다려주세요</Text>
        </>
    )
}

function Main(){

    const [pause, setPause] = useState(false);
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // 임의값
    const user_id = "63f3adaa4508143f99d3978a"
    const road_id = "63f4678ab3e182fa55cb4667"
    const location = "중부고속도로"

    async function api() { 
        setLoading(true);
        await axios.post(
            `http://192.168.0.72:3000/result/model`, {
                user_id: user_id,
                road_id: road_id,
                location: location
            }
        ).then((res) => {
            // console.log(res.data.dangers)
            // setData(res.data.data)
            console.log("success")
            setLoading(false);
            Alert.alert('영상 분석 완료', 'yolov5 를 통해 영상을 분석했습니다.', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);

        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <> 
        <View style={{backgroundColor: "#7286D3",}}>
            <Text style={{fontSize: 50, textAlign: "center", color: "white", }}>RoadKeeper</Text>
        </View>
        <View style={{backgroundColor: "#FFF2F2",}}>
        </View>
            <Webcam pause={pause}/>
            {loading ? <Loading /> : null}
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', backgroundColor: "#E5E0FF", }}>
                <TouchableOpacity onPress={()=>{
                    setPause(false);
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", padding: 10,}}>시작</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    setPause(true);
                    api();
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