import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from "react-native"
import ResultModal from "./resultModal";
import { useState, useEffect } from "react";
import axios from 'axios';

const DATA = [
    {
        id: '1',
        type: 'pothole',
        location: '1 1 1 1',
        accuracy: '80%',
    },
    {
        id: '2',
        type: 'person',
        location: '2 2 2 2',
        accuracy: '70%',
    },
    {
        id: '3',
        type: 'manhole',
        location: '3 3 3 3',
        accuracy: '90%',
    },
    {
        id: '4',
        type: 'filled pothole',
        location: '4 4 4 4',
        accuracy: '55%',
    },
];

const Item = ({category, location, accuracy, danger_score, quick, complete}) => {

    return(
        <>
        <View style={styles.item}>
            <Text style={styles.itemtext}>Category: {category}</Text>
            <Text style={styles.itemtext}>Location: {location}</Text>
            <Text style={styles.itemtext}>Accuracy: {accuracy}</Text>
            <Text style={styles.itemtext}>Danger Score: {danger_score}</Text>
            {/* <Text style={styles.itemtext}>Need Quick Fix: {quick.toString()}</Text>
            <Text style={styles.itemtext}>Fix: {complete.toString()}</Text> */}
        </View>
        </>
    )
    
};

function Result(){
    const [resultModalVisible, setResultModalVisible] = useState(false);
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [accuracy, setAccuracy] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data === undefined) return;
        const user_id = "63f4676fb3e182fa55cb4662"
        async function api() { 
            await axios.get(
                `http://ec2-35-77-220-13.ap-northeast-1.compute.amazonaws.com/result/${user_id}`
            ).then((res) => {
                // console.log(res.data.dangers)
                setData(res.data.data)
            })
        }
        api();
        // setData(res.data)
    }, [data])

    const renderItem = ({item, index}) => 
        <Item category={item.category} location={item.location} accuracy={item.accuracy} danger_score={item.danger_score} quick={item.quick} complete={item.complete}/>
    
        // <TouchableOpacity style={styles.touch} onPress={()=>{
        //     setCategory(item.category);
        //     setLocation(item.location);
        //     setAccuracy(item.accuracy);
            
        //     setResultModalVisible(true);
        // }}>
            // <Item category={item.category} location={item.location} accuracy={item.accuracy} />
        // </TouchableOpacity>

    return(
        <>
        <SafeAreaView style={{backgroundColor: "#FFF2F2"}}>
            <View style={styles.titleview}>
                <Text style={styles.title}>인식 결과</Text>
            </View>
            <View style={styles.tableview}>
                <FlatList style={styles.list}
                    data={data}
                    renderItem={renderItem}
                />
            </View> 
        </SafeAreaView>
        <ResultModal 
            type={category}
            location={location}
            accuracy={accuracy}
            setResultModalVisible={setResultModalVisible}
            isVisible={resultModalVisible}
        />
        </>
        
    );
};

const styles = StyleSheet.create({
    titleview: {
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "#7286D3",
    },
    title: {
        fontSize: 30,
        color: "white",
    },
    tableview: {
        marginTop: 30,
    },
    item: {
        borderWidth: 5,
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "#E5E0FF",
        backgroundColor: "#E5E0FF",
        marginBottom: 5,
        marginLeft: 3,
        marginRight: 3,
        padding: 5,
        flex: 1,
    },
    itemtext : {
        fontSize: 20,
    },
    list: {
        float: 'left',
        marginTop: 10,
    },
    touch: {
        flex: 1,
    }

})

export default Result;