import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native';

const CustomButton = ({ onPress, text, type, loading }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
      disabled={loading} // Disable the button when loading
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
      )}
    </Pressable>
  );
};

export default CustomButton

const styles = StyleSheet.create({
  container: {

    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {

    backgroundColor: '#3B71F3',

  },
  container_SECONDARY:{
    borderColor: '#3B71F3',
    borderWidth: 2,
    
  },
  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'grey',
  },
  text_SECONDARY: {

    color: '#3B71F3',
  }
})