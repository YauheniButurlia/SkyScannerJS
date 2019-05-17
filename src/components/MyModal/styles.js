import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    content: {
      backgroundColor: 'yellow',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    addButton: {
        color: "#32CD32"
    },
    cancelButton: {
        color: "#FF0000"
    },
    buttonsContainer: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fieldsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
  });