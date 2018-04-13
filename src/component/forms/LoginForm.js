import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    } from 'react-native';
//import { SocialIcon } from 'react-native-elements';
import Validator from 'validator';
import { Actions } from 'react-native-router-flux';
import Firebase from 'firebase';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'dota2@gmail.com' ,
            password: '123456789',
            errors: {
                email: '',
                password: '',
            },
        };
        this.checkEmail = this.checkEmail.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    /*register() {
        Actions.register();
    }*/
   
    onSubmit() {
        const { email ,password } = this.state;
        //Login Firebase
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { 
                this.setState({ error: ''}); 
                Actions.main();
            })
            .catch(() => {
                alert("Email or Password are invalid. \n Please re-enter");
            });
    }
    checkEmail(){
        if(!Validator.isEmail(this.state.email)) {
            this.setState({ errors: {...this.state.errors, email: 'กรุณาใส่อีเมล' } });
        }
        else { 
            this.setState({ errors: {...this.state.errors, email: '' } });
        }
    }
    checkPassword(){
        if (this.state.password.length < 7 ) {
            this.setState({ errors: {...this.state.errors, password: 'กรุณาใส่รหัสผ่าน' } });
        } 
        else {
            this.setState({ errors: {...this.state.errors, password: '' } });
        }
    //console.log(this.state);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{alignItems : 'center',justifyContent: 'center'}}>
                    <Image
                        style= {{width: 100, height : 100,}}
                        source={require('../../Image/1.png')}
                    /> 
                    <Text style={styles.title}>
                        ยินดีต้อนรับ
                    </Text>
                    <Text style={styles.title}>
                        เข้าสู่สมาร์ทฟาร์ม
                    </Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='อีเมล'
                    onChangeText={(email) => this.setState({email: email.toLowerCase()})}
                    value={this.state.email}
                    onBlur = {this.checkEmail}
                />
                <Text style={styles.alertText}>{this.state.errors.email}</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='รหัสผ่าน'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    onKeyPress={this.checkPassword}
                />
                <Text style={styles.alertText}>{this.state.errors.password}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>

                
            </View>
        );
    }
}
export default LoginForm;

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#ffffff' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color : '#175f17',
        marginVertical: 1,
    
    },
    textInput: {
        height : 42 ,
        width : 300,
        backgroundColor : '#ffffff',
        borderRadius : 20,
        marginVertical : 3,
        paddingLeft : 15,
        fontSize : 17,
    },
    buttonText: {
        fontSize : 22,
        fontWeight : '500',
        color : 'white',
        padding : 10,
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
    alertText: {
        color : '#660000',
        fontSize : 14
    }
  });