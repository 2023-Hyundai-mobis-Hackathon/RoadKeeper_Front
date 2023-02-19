import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from "react-native"

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

const Item = ({type, location, accuracy, id}) => (

    <View style={styles.item}>
        <Text style={styles.itemtext}>Type: {type}</Text>
        <Text style={styles.itemtext}>Location: {location}</Text>
        <Text style={styles.itemtext}>Accuracy: {accuracy}</Text>
    </View>

);

function Result(){

    const renderItem = ({item, index}) => 
        <TouchableOpacity style={styles.touch} onPressIn={()=>{
            console.log(index)
        }}>
            <Item type={item.type} location={item.location} accuracy={item.accuracy} id={item.id} />
        </TouchableOpacity>;

    return(
        <SafeAreaView>
            <View style={styles.titleview}>
                <Text style={styles.title}>Detection Result</Text>
            </View>
      
            <View style={styles.tableview}>
                <FlatList style={styles.list}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View> 
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleview: {
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "#3E54AC",
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
        borderColor: "#BFDCE5",
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