import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'

class Profile extends Component {
    handlePress = () => {
        this.props.navigation.navigate('Home')
    }
    setParams = () => {
        this.props.navigation.setParams({
            name: 'Emilia Santos'
        })
    }
    static navigationOptions = ({ navigation }) => { // a navigation llegan los parámetros
        return {
            // retorno las opciones que puedo configurar
            title: `${navigation.getParam('name')} ${navigation.getParam('edad', 43)}`
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <Button
                    title="Ir a la home"
                    onPress={this.handlePress}
                />
                <Button
                    title="Cambiar nombre"
                    onPress={this.setParams}
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

export default Profile