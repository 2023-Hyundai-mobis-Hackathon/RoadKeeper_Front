import { Text, TouchableOpacity, View } from "react-native"

import Navigation from "../../components/main/navigation";
import { useState } from "react";

function Main(){

    const [pause, setPause] = useState(false);

    return(
        <> 
            <Text style={{fontSize: 50, textAlign: "center"}}>RoadKeeper</Text>
            <Navigation pause={pause}/>
            <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'center', }}>
                <TouchableOpacity onPress={()=>{
                    setPause(false);
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", padding: 10}}>시작</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    setPause(true);
                }}>
                    <Text style={{fontSize: 30, textAlign: "center", padding: 10}}>끝</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{

                }}>
                    <Text style={{fontSize: 30, textAlign: "center", padding: 10}}>결과보기</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

export default Main;