
import React, { Component } from 'react';
import { 
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Router , Stack , Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SetPage from './pages/SetPage';
import Set2Page from './pages/Set2Page';
// import RegisterPage from './pages/RegisterPage';

class TabIcon extends Component {
    render() {
      var color = this.props.selected ? '#00f240' : '#301c2a';
  
      return (
        <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
            <Icon style={{color: '#5D6D7E' }} name={this.props.iconName || "circle"} size={20}/>
        </View>
      );
    }
  }

class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={ true } >
                    <Scene key="login" component={ LoginPage } title="Login" initial={ true }/>
                    <Scene key="main" component={ HomePage } title="Main SMF" />
                    {/* <Scene key="register" component={ RegisterPage } title="Register"/> */}
                    {/* <Scene key="set" component={ SetPage } title="set"/> */}
                    {/* <Scene key="set2" component={ Set2Page } title="set"/> */}
                    <Scene key="tabbar" tabs={true} hideNavBar={true} tabBarPosition="bottom">
                        <Scene key="tab1" 
                            hideNavBar={true} 
                            component={ SetPage } 
                            title="แปลง 1" 
                            initial={true} 
                            iconName="cog"
                            icon={TabIcon}
                        />
                        <Scene key="tab2" 
                            hideNavBar={true} 
                            component={ Set2Page } 
                            title="แปลง 2" 
                            iconName="cog"
                            icon={TabIcon}
                        />
                    </Scene>
                </Stack>
            </Router>
        );
    }
}
export default Routes;
