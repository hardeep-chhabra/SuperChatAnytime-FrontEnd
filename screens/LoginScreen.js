import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import { firebaseAuth } from '../firebase';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(firebaseAuth, (authUser) => {
    //         console.log('CCCCCCCCCCCCCCCCCCCCCC', authUser)
    //         if (authUser) {
    //             navigation.replace('Home')
    //         }

    //     });
        
    //     console.log('DDDDDDDDDDDDDDDDDDDDDD', unsubscribe)
    //     // return unsubscribe
    // },[]
    // )

    

    const signInUser = () => {
        signInWithEmailAndPassword(firebaseAuth, email, password).catch((error) => {
        alert('Please Type in Correct Password');
        })
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar backgroundColor='black' />
            <Image source={{uri:'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'}} style={{width:200, height:200}} />
            <View style={styles.inputContainer}>
            <Input placeholder='Email Address' autoFocus type='email' value={email} onChangeText={(text => setEmail(text))} />
            <Input placeholder='Password' type='password' secureTextEntry value={password} onChangeText={(text => setPassword(text))} />
            </View>

            <Button title='Login' containerStyle={styles.button} onPress={signInUser} />
            <Button title='Register' containerStyle={styles.button} type='outline' onPress={() => navigation.navigate('Register')} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:'white'
        
        
    },
    inputContainer: {
        width:300
    },
    button: {
        width:200,
        marginTop:10
    }
})
