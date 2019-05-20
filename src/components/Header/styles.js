import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 9999
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
        alignItems: 'center',
        justifyContent: 'center',
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