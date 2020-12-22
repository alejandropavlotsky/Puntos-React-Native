import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';


export default ({title, ...rest}) => {
    return(
        <View style={styles.wrapper}>
            <Text>{title}</Text>
            <TextInput {...rest}/>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        height: 40
    }
})