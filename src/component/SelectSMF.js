import React, { Component } from 'react';
import { 
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ImageBackground,
} from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class SelectSMF extends Component {
    constructor(props) {
        super(props);
        this.temp = Firebase.database().ref().child('Temp');
        this.moist = Firebase.database().ref().child('moist');
        this.moist2 = Firebase.database().ref().child('moist2');
        this.hr = Firebase.database().ref().child('Setting/TimeWater/hr');
        this.min = Firebase.database().ref().child('Setting/TimeWater/min');
        this.date = Firebase.database().ref().child('Setting/Timepui/datepui');
        this.state = {
            temp : '',
            moist : '',
            moist2 : '',
            waterhr : null,
            watermin : null,
            datepui : null,
            
        };
    }
    componentDidMount(){
        this.temp.on('value',snap => {
            this.setState({ 
                temp : snap.val()
            });
        });
        this.moist.on('value',snap => {
            this.setState({ 
                moist : snap.val() 
            });
        });
        this.moist2.on('value',snap => {
            this.setState({ 
                moist2 : snap.val() 
            });
        });
        this.hr.on('value',snap => {
            this.setState({ 
                waterhr : snap.val() 
            });
        });
        this.min.on('value',snap => {
            this.setState({ 
                watermin : snap.val() 
            });
        });
        this.date.on('value',snap => {
            this.setState({ 
                datepui : snap.val() 
            });
        });
    }
    onSubmit(){
        Actions.tabbar();
    }

    logOutAuth(){
        Firebase.auth().signOut()
        .then(() => {
            Alert.alert(
                'คุณแน่ใจว่าจะออกจากระบบ ?',
                'คุณต้องการออกจากระบบในเวลานี้หรือไม่ ?',
                [
                    {text: 'ตกลง', onPress: () => Actions.reset("login" )},
                    {text: 'ยกเลิก', onPress: () => console.log('cancel') , style: 'cancel'},
                ],
                { cancelable: false }
              )
        })
        .catch(() => {
            alert("Can't log out on this time.");
        });
    };

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.container} source={require('../Image/bg.jpg')}>
                    <Text style={styles.title}>
                        แสดงค่าสถานะภายในฟาร์ม
                    </Text>
                    
                    <Text style={styles.Text}>
                        อุณหภูมิ : {this.state.temp}°C
                    </Text>

                    <Text style={styles.Text}>
                        แปลง 1 : ความชื้นในดิน : {this.state.moist}%
                    </Text>
                    <Text style={styles.Text}>
                        แปลง 2 : ความชื้นในดิน :  {this.state.moist2}%
                    </Text>
                    <Text style={styles.Text}>
                        เวลารดน้ำ {this.state.waterhr} : {this.state.watermin} น.
                    </Text>
                    <Text style={styles.Text}>
                        รดปุ๋ยทุก {this.state.datepui} วัน
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onSubmit}
                    >
                        <Text style={styles.buttonText}>การตั้งค่า</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style = {styles.button1}
                            onPress={()=> this.logOutAuth()}
                        >
                            <Text style={styles.buttonText}>ออกจากระบบ</Text>  
                        </TouchableOpacity>
                    </ImageBackground>
            </View>
            
        );
    }




} export default SelectSMF

const styles = StyleSheet.create({
    container: {
        //backgroundColor : '#ffffff' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
        alignSelf: 'stretch',
        width: '100%',
        height : '100%'
    },
    Text: {
        fontSize : 20,
        marginVertical : 10,
        fontWeight : '500',
        color : 'black',
        padding : 10,
        borderRadius : 30,
        //backgroundColor : '#874514'
    },
    TextInput: {
        marginVertical : 25,
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 60,
        alignItems : 'center',
        justifyContent : 'center'
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color : '#FFFFFF',
    },
    buttonText: {
        fontSize: 20,
        color : '#ffffff',
    },
    button1: {
        backgroundColor : 'red',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center'
    },
});
