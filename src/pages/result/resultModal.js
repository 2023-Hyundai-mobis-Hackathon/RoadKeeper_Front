import { Text, View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import React from 'react';
import call from 'react-native-phone-call'
import { useState } from "react";

function ResultModal(props){

    return(
        <Modal animationType="slide" transparent={true} visible={props.isVisible}>
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <Text style={{fontSize: 30, textAlign: "center", padding: 10}}>신고하시겠습니까?</Text>
                    <View style={{ flexDirection: 'column', width: '95%', justifyContent: 'center', }}>
                        <Text style={{fontSize: 20, textAlign: "center", padding: 10}}>type: {props.type}</Text>
                        <Text style={{fontSize: 20, textAlign: "center", padding: 10}}>GPS: {props.location}</Text>
                        <Text style={{fontSize: 20, textAlign: "center", padding: 10}}>accuracy: {props.accuracy}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'center', }}>
                        <TouchableOpacity onPress={()=>{
                            // 전화 연결
                            const args = {
                                number: '15882504', // String value with the number to call
                                prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
                                skipCanOpen: true // Skip the canOpenURL check
                            }
                            call(args).catch(console.error)
                            
                        }}>
                            <Text style={{fontSize: 30, textAlign: "center", padding: 10}}>신고</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            props.setResultModalVisible(false);
                        }}>
                            <Text style={{fontSize: 30, textAlign: "center", padding: 10}}>취소</Text>
                        </TouchableOpacity>
                    </View>
                
                </View>

            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1,
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    modalContainer: {
        //flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: 300,
        height: 400,
        borderRadius: 20,
        elevation: 3,
    },
})


export default ResultModal;
