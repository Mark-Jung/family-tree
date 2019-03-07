import React, { Component } from 'react';
import { View, Text, Platform, Button } from 'react-native';
import {Header} from "react-navigation";

class CustomHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{
                alignItems: 'center', 
                height: 56,
                marginTop: Platform.OS == "ios" ? 20:0}}>
                <Text style={{fontSize: 40,}}>{this.props.title}</Text>
            </View>
        )
    }
}

export default CustomHeader