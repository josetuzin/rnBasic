import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'

class About extends Component {
    handlePress = () => {
        this.props.navigation.navigate('Profile', {
            name: 'José Tuzinkievicz'
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>About</Text>
                <Button
                    title="Ir al profile"
                    onPress={this.handlePress}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default About