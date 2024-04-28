export const fetchCatBreeds = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/breeds', {
        headers: {
          'x-api-key': 'bda53789-d59e-46cd-9bc4-2936620fde39',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching cat breeds:', error);
      throw error;
    }
  };
  
  export const fetchCatImages = async (breedId) => {
    try {
      const imageResponse = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
      const imageData = await imageResponse.json();
      const imageUrl = imageData[0]?.url;
      return imageUrl;
    } catch (error) {
      console.error('Error fetching cat images:', error);
      throw error;
    }
  };
  
  export const getCountryName = async (countryCode) => {
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
  