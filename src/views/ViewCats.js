import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardViewCats from './card/CardViewCats';

const catData = [
    {
      breedName: 'Maine Coon',
      imageUrl: 'https://via.placeholder.com/150',
      origin: 'United States',
      intelligence: 'High',
    },
    {
      breedName: 'Persian',
      imageUrl: 'https://via.placeholder.com/150',
      origin: 'Iran',
      intelligence: 'Medium',
    },
];

export default function ViewCats() {
  return (
    <SafeAreaView style={styles.container}>
      <CardViewCats breedTitle="Catbreeds" catData={catData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });