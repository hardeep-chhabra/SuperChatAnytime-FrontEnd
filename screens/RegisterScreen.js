import React, { useEffect, useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { Button, Input, Text, Image } from 'react-native-elements' 
import { firebaseAuth } from '../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8Hpv7NMAP9pAIarrNjLhTGWdZ_VNF1Rw",
    authDomain: "superchatfirebaseproject.firebaseapp.com",
    projectId: "superchatfirebaseproject",
    storageBucket: "superchatfirebaseproject.appspot.com",
    messagingSenderId: "37692916990",
    appId: "1:37692916990:web:098eeb02ab521d329851af"
  };

  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  }
  else {
    app = firebase.app();
  }
  const db = app.firestore();

  const sdkjfsdkjf = () => { 
    db.collection("Users").doc('mydoc').collection('Activities').doc('Database').set({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ');

}


sdkjfsdkjf();



const RegisterScreen = ({ navigation }) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [ImageUrl,setImageUrl] = useState('');

    console.log('BBBBBBBBBBBBBBBBBBBBBBBBBB');

    useLayoutEffect(() => {
    console.log('FFFFFFFFFFFFFFFFFFFFFF')
    navigation.setOptions({
        headerBackTitle:'ASAASAS'
    })
        
    }, [navigation])


    const register = () => {
        createUserWithEmailAndPassword(firebaseAuth, email, password).then((authUser) => {
        authUser.user.displayName = name;
        authUser.user.photoURL = ImageUrl || 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png';
        console.log('555555555555555555555', authUser);
    }
        )
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar backgroundColor='black' />
            <Text h4 style={{marginBottom: 50}}>
                Create a Signal Account
                </Text>

            <View style={styles.inputContainer}>
                <Input 
                placeholder='Full Name' 
                autoFocus 
                type='text'
                value={name}
                onChangeText={(text) => setName(text)}
                />
                <Input 
                placeholder='EmailID' 
                type='email'
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <Input 
                placeholder='Password' 
                type='password'
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
                <Input 
                placeholder='Profile Picture URL' 
                type='text'
                value={ImageUrl}
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register}
                />
            </View>

            <Button containerStyle={styles.button} title='Register' onPress={register} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:'white'
    },
    inputContainer: {
        width:300
    },
    button: {
        width:500,
        marginTop:10
    }
})
