import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Card } from '@rneui/themed';

export default function CardViewCats({ breedTitle, catData }) {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{breedTitle}</Text>
      <View style={styles.cardsContainer}>
        {catData.map((cat, index) => (
          <Card key={index} containerStyle={styles.card}>
            <View>
                <Text style={styles.catName}>{cat.name}</Text>
                <Image style={styles.image} source={{ uri: cat.imageUrl }}/>
                <View style={styles.boxOriginAndIntelligence}>
                    <Text style={styles.origin}>{cat.country_code}</Text>
                    <Text style={styles.intelligence}>{cat.intelligence}</Text>
                </View>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardsContainer: {
    paddingTop: 10,
  },
  card: {
    borderColor: 'black',
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  catName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  origin: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  intelligence: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxOriginAndIntelligence: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
