import React, { useLayoutEffect } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/CustomListItem'
import { firebaseAuth } from '../firebase'
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title:'ESS',
            headerStyle: {backgroundColor:'white'},
            headerTitleStyle: {color: 'black'},
            headerTintStyle: 'black',
            headerLeft: () => (
                <View style={{marginLeft:10}}>
                    <TouchableOpacity>
                        <Avatar rounded source={{uri:firebaseAuth?.currentUser?.photoURL}} >
                            <Text>{firebaseAuth?.currentUser?.displayName}</Text>
                            </Avatar>
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    width:50,
                    marginRight:20
                }}
                >
                    <TouchableOpacity activeOpacity={0.5}>
                    <FontAwesome5 name='comments' size={40}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('AddChat')} >
                        <AntIcon color='black' name="camerao" size={40}>
                        </AntIcon>
                    </TouchableOpacity>
                </View>
            )
        })

    },[])

    return (
        <SafeAreaView>
            <ScrollView>
            <CustomListItem />
        </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
