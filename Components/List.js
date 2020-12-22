import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';

export default ({puntos, closeModal}) => {
    return(
        <>
            <View style={styles.list}>
                <FlatList 
                    data={puntos.map(x => x.name)}
                    renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button onPress={closeModal} title="Cerrar"/>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    button: {paddingBottom: 15},
    item: {borderBottomWidth: 1, borderColor: '#ccc', height: 50, justifyContent: 'center', padding: 15},
    list: {height: Dimensions.get('window').height - 250},
})