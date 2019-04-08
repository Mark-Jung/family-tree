import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Item, } from 'native-base';
import CustomHeader from '../../components/Common/CustomHeader'

import { connect } from 'react-redux';

import styles from './styles';

const {
    flatListStyle
} = styles;


class DetailsComponent extends Component {
    static navigationOptions = {
        title: 'Details',
      };

      constructor(props) {
        super(props);
        this.state = {
            name: "Lexi Ryan", // undefined,
            relation: "Me", // undefined,
            birth_year: "1998", // undefined,
            nickname: "Princess", // undefined,
            lives_in: "New York City",  // undefined

        };
    }
    render() {
        const toAddRelations = NavigationActions.navigate({
            routeName: 'AddRelations',
          
            params: {},
          
            action: NavigationActions.navigate({ routeName: 'AddRelations' }),
        });
        
        // TODO: change spaces to two different columns
        return (
            <View style={flatListStyle}>
                <Text style = {{fontWeight: 'bold', textAlign: 'center', fontSize: 40, paddingTop: 10}}>
                    {this.state.name}
                </Text>
                <Text style = {{ color: '#DB9872', textAlign: 'center', fontSize: 20, paddingBottom: 25,}}>
                    {this.state.relation}
                </Text>
                <Text style = {{textAlign: 'left', fontSize: 24}}>
                    Birth Year&nbsp;&nbsp;&nbsp;&nbsp;  
                    {this.state.birth_year}
                </Text>
                <Text style = {{textAlign: 'left', fontSize: 24}}>
                    Nickname&nbsp;&nbsp;&nbsp;&nbsp;
                    {this.state.nickname}
                </Text>
                <Text style = {{textAlign: 'left', fontSize: 24}}>
                    Lives in&nbsp;&nbsp;&nbsp;&nbsp;
                    {this.state.lives_in}
                </Text>
                <Button
                    title="go to AddRelations"
                    onPress={() => this.props.navigation.dispatch(toAddRelations)}
                ></Button>
            </View>
        );
    }
}

export { DetailsComponent };

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);