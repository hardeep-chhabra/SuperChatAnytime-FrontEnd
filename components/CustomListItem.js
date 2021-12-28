import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'



const CustomListItem = ({ id,chatName,enterChat }) => {
    return (
        <ListItem>
            <Avatar
            rounded
            source={{
                uri:'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
            }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:'800'}}>
                    SuperTIme Chat
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    This is a Subtitle just for testing purposes
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
