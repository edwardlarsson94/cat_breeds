import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardViewCats from './card/CardViewCats';
import { useCatViewModel } from '../blocs/viewModels/ViewModelCat';

export default function ViewCats() {
  const { catBreeds } = useCatViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <CardViewCats breedTitle="Catbreeds" catData={catBreeds} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
