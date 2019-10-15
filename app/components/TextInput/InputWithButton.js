import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true} = props;

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken;

    const containerStyles = [styles.container];
    if(editable == false){
        containerStyles.push(styles.containerDisabled);
    }
    return (
    <View style={styles.container}>
        <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput style={styles.input} {...props} />
    </View>
)
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
}

export default InputWithButton;
