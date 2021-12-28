import React, { useState } from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { collection, addDoc } from '@firebase/firestore';
import { firebaseDB } from '../firebase';

const createChatFunc = async () => {
    // console.log('JJJJJJJJJJJJJJJJJJJJJJJJJ', firebaseDB);
  
    const docRef = await addDoc(collection(firebaseDB, "Users-asdasd-asrwer"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });

    console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRR', docRef);
}



const AddChatScreen = () => {
    const [input, setinput] = useState('')

    // function createChatFunc() {
    //     console.log('JJJJJJJJJJJJJJJJJJJJJJJ');
    //     addDoc(collection(firebaseDB, "usersasd"), {
    //         first: "Ada",
    //         last: "Lovelace",
    //         born: 1815
    //       }).then((docRef) => {
    //         console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRR', docRef);
    //       })
    // }
    

    return (
        <View style={styles.container}>
            <Input 
            placeholder='Enter a Chat Name'
            value={input}
            onChangeText={(text) => setinput(text)}
            leftIcon={<Icon name='wechat' type='antdesign' size={24} color='black' />}
            />

            <Button onPress={createChatFunc} title='Create a New Chat' />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {

    }
})
