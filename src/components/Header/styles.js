import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    settingsButton: {
        width: 30,
        height: 30
    },
    logoContainer: {
        width: '20%'
    },
    titleContainer: {
        width: '60%'
    },
    buttonContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});