import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'
import { StackActions } from 'react-navigation' 

class Home extends Component {
    handlePress = () => {
        // console.log(this.props.navigation.navigate('Login'))
        //this.props.navigation.navigate('Login')

        // la dife con .navigate('Login') es que la agrega al stack de navegación
        this.props.navigation.dispatch(StackActions.push({
            routeName: 'Login',
            // params: {
            //     ...
            // }
        }))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button
                    title="Ir al login"
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

export default Home