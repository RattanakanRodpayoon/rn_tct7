import React, { Component } from 'react';
import { 
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class SetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moistset : null,
            waterhr : null,
            watermin : null,
            datepui : null,
        };
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    onSubmit(){
        Firebase.database().ref('Setting').update({
            Moist : this.state.moistset*1,
        });
        Firebase.database().ref('Setting/TimeWater').update({
            hr : this.state.waterhr*1,
            min : this.state.watermin*1,
        });
        Firebase.database().ref('Setting/Timepui').update({
            datepui : this.state.datepui*1,
        });
        Actions.reset("main");
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title1}>
                    ตั้งค่าสถานะของฟาร์ม แปลง 1
                </Text>

                <Text style={styles.title2}>
                    การตั้งค่าความชื้นในดิน
                </Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder='ตั้งค่าความชื้น'
                    onChangeText={(moistset) => this.setState({moistset})}
                    value={this.state.moistset}
                />
                
                <Text style={styles.title2}>
                    การตั้งค่าเวลารดน้ำ
                </Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder='ตั้งค่าชั่วโมง XX : 00 น.'
                    onChangeText={(waterhr) => this.setState({waterhr})}
                    value={this.state.waterhr}
                />

                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder='ตั้งค่านาที 00 : XX น.'
                    onChangeText={(watermin) => this.setState({watermin})}
                    value={this.state.watermin}
                />

                <Text style={styles.title2}>
                    การตั้งค่าเวลาลดปุ๋ย
                </Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder='การตั้งค่าวัน'
                    onChangeText={(datepui) => this.setState({datepui})}
                    value={this.state.datepui}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>ยืนยัน</Text>
                </TouchableOpacity>
            </View>
            
        );
    }



} export default SetForm

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#ffffff' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1
    },
    Text: {
        fontSize : 20,
        marginVertical : 25,
        fontWeight : '500',
        color : '#175f17',
        padding : 10,
        backgroundColor : '#874514'
    },
    textInput: {
        height : 42 ,
        width : 300,
        backgroundColor : '#F8F8FF',
        borderRadius : 20,
        marginVertical : 3,
        paddingLeft : 15,
        fontSize : 17
    },
    button: {
        marginVertical : 25,
        backgroundColor : '#175f17',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title1: {
        fontSize: 32,
        fontWeight: 'bold',
        color : '#175f17'
    },
    title2: {
        marginVertical: 2,
        fontSize: 24,
        color : '#175f17'
    },
    buttonText: {
        color : '#ffffff',
        fontSize: 20
    },
    buttonText2: {
        color : '#175f17',
        fontSize: 20
    },
});