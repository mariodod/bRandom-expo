import React, { useState} from 'react'
import { useEffect } from 'react';
import { StyleSheet, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [image, setImage] = useState('');

  const selectRandomImage = async () => {
    //Code to select a random image from your gallery goes here
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      //allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!result.canceled){
      setImage(result.assets[0].uri)
    }
    };
  
  useEffect(() => {
    //selectRandomImage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Button title="Pick Image" onPress={selectRandomImage} />
      {image ? (
        <Image source={{ uri: image}} style={styles.image} />
      ) : (
        <Text>No image selected</Text>
      )}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 200,
    height: 200
  }
});
