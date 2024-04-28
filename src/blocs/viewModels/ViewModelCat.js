import { useEffect, useState } from 'react';
import { fetchCatBreeds, fetchCatImages, getCountryName } from '../../api/ApiCats';

export const useCatViewModel = () => {
  const [catBreeds, setCatBreeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCatBreeds();
        const countryNamePromises = data.map(catBreed => getCountryName(catBreed.country_code));
        const countryNames = await Promise.all(countryNamePromises);
        const catBreedsWithImages = await Promise.all(data.map(async (catBreed, index) => {
          const imageUrl = await fetchCatImages(catBreed.id);
          return {
            name: catBreed.name,
            country_code: catBreed.country_code,
            intelligence: catBreed.intelligence,
            imageUrl: imageUrl,
          };
        }));
        setCatBreeds(catBreedsWithImages);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };

    fetchData();
  }, []);

  return {
    catBreeds,
  };
};
