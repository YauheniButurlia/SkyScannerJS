import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    mainContainer: {
        marginTop: 10, 
        width: '100%', 
        height: 100
    },
    upSubContainer: {
        flexDirection: 'row', 
        width: '100%', 
        height: 50
    },
    halfUp: {
        flexDirection: 'row', 
        width: '50%', 
        height: 50
    },
    sliderStyle: {
        width: '100%', 
        height: 50
    },
    wideTextField: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width:'70%'
    },
    wideTextFieldPlusBorder: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width:'70%',
        borderWidth: 1
    },
    thinTextField: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width:'30%',
    },
    textStyle: {
        fontSize: 18  
    }
});