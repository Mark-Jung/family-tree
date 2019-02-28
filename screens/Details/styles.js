import { Dimensions } from 'react-native';


export default {
    flatListStyle: {
        flex: 1,
        marginLeft: Dimensions.get('window').width* 0.02,
        marginRight: Dimensions.get('window').width* 0.02,
    },
    buttonStyle: {
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        marginTop: 5
    }
}