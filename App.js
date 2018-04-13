console.log('App is working.');
import React , { Component } from 'react';
import { 
    Text,
    StyleSheet,
} from 'react-native';

import Routes from './src/component/Routes';
import Firebase from 'firebase';

export default class App extends Component {
    componentWillMount() {
        Firebase.initializeApp({
            apiKey: "AIzaSyAfYvCk7DTUrWdbV4r_51uPdzBP4DgYYGs",
            authDomain: "pjsmrf.firebaseapp.com",
            databaseURL: "https://pjsmrf.firebaseio.com",
            projectId: "pjsmrf",
            storageBucket: "pjsmrf.appspot.com",
            messagingSenderId: "190482487459"
        })
    }
    render() {
        return (
            <Routes/>
        );
    }
}
