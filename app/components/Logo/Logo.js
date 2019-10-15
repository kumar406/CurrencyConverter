import React, { Component } from 'react';
import { View, Image, Text, Keyboard, Animated } from 'react-native';
import { styles } from './styles';

class Logo extends Component {
    constructor(props) {
        super(props);

        this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);

    }
    componentDidMount() {
        this.keyboardShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardHide);
    };
    componentWillUnmount() {
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    };

    keyboardShow = () => (
        console.log('keyboard did show')           
    );  

    keyboardHide = () => (
        console.log('keyboard did hide')
    );

    render() {
        const containerImageStyle = [
            styles.containerImage,
            { width: this.containerImageWidth, height: this.containerImageWidth },
        ]
        return (
            <View style={styles.container}>
                <Animated.Image>
                       resizeMode="contain"
                       style={containerImageStyle} 
                       source={require('./images/background.png')} >
                    <Image style={styles.image} source={require('./images/logo.png')}/>
                </Animated.Image>
                <Text style={styles.Text}>Currency Converter</Text>
            </View>
        
        );
    }
}

export default Logo;