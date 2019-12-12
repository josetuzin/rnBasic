import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <Button
                    title="Ir al About"
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

export default Login