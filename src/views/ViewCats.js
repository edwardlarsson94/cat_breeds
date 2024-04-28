import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardViewCats from './card/CardViewCats';

export default function ViewCats() {

    const [catBreeds, setCatBreeds] = useState([]);

    useEffect(() => {
        const fetchCatBreeds = async () => {
          try {
            const response = await fetch('https://api.thecatapi.com/v1/breeds', {
              headers: {
                'x-api-key': 'bda53789-d59e-46cd-9bc4-2936620fde39',
              },
            });
            const data = await response.json();
            const countryNamePromises = data.map(catBreed => getCountryName(catBreed.country_code));
            const countryNames = await Promise.all(countryNamePromises);//TODO: Improving get name country by code
            const catBreedsWithImages = await Promise.all(data.map(async (catBreed, index) => {
              const imageResponse = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catBreed.id}`);
              const imageData = await imageResponse.json();
              const imageUrl = imageData[0]?.url;
      
              return {
                name: catBreed.name,
                country_code: catBreed.country_code,
                intelligence: catBreed.intelligence,
                imageUrl: imageUrl,
              };
            }));
            setCatBreeds(catBreedsWithImages);
          } catch (error) {
            console.error('Error fetching cat breeds:', error);
          }
        };
      
        fetchCatBreeds();
      }, []);
      

    const getCountryName = async (countryCode) => {
        try {
            const response = await fetch(`http://api.geonames.org/countryInfoJSON?country=${countryCode}&username=demo`);
            const data = await response.json();
            if (data.geonames && data.geonames.length > 0) {
                return data.geonames[0].countryName;
            } else {
                return 'Unknown';
            }
        } catch (error) {
            console.error('Error fetching country name:', error);
            return 'Unknown';
        }
    };

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