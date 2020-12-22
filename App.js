import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './Components';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto')
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(true)

  const togglePointsFilter = () => {
    setPointsFilter(!pointsFilter)
  }

  const handleLongPress = ( {nativeEvent}) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = {coordinate: puntoTemp, name: nombre}
    setPuntos(puntos.concat(newPunto))
    if(nombre === ''){
      setVisibility(true)
    }else{
      setVisibility(false)
    }
    setNombre('')
  }

  const handleCancel = () => {
    setVisibility(false)
    setNombre('')
  }

  const handleList = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map puntos={puntos} onLongPress={handleLongPress} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleList} textLeft={'Lista'} togglePointsFilter={togglePointsFilter}/>
      <Modal visibility={visibility}> 
        {visibilityFilter === 'new_punto' 
        ? 
        <View style={styles.form}>
          <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText}/>
          <Button title="Aceptar" onPress={handleSubmit}/>
          <Button title="Cancelar" onPress={handleCancel}/>
        </View>
        : <List closeModal={() => setVisibility(false)} puntos={puntos}/>
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {padding: 20},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalView: {backgroundColor: '#fff', borderRadius: 4, padding: 20, shadowColor: '#000', shadowOffset: {width: 0, height: 3}}, 
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
