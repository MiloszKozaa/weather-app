import axios from 'axios';
import { useState } from 'react';

// if (event.key === 'Enter') {
//   let urlLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=5d5354d7863de7c61b429e2ef6b79da2`;
//   axios.get(urlLocation).then((response: any) => {
//     latitudeSet(response.data[0].lat);
//     longitudeSet(response.data[0].lon);
//     console.log(
//       response.data[0].name,
//       response.data[0].lat,
//       response.data[0].lon
//     );
//   });

const SearchLocation = () => {
  const [lat, latSet] = useState<number>();
  const [lon, lonSet] = useState<number>();
  const [location, locationSet] = useState<string>('');
  const [searchUrl, searchUrlSet] = useState<string>('');

  const getCityLocation = async (event: any) => {
    if (event.key === 'Enter') {
      await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=5d5354d7863de7c61b429e2ef6b79da2`
        )
        .then((res: any) => {
          latSet(res.data[0].lat);
          lonSet(res.data[0].lon);
          console.log(res.data[0].name, res.data[0].lat, res.data[0].lon);
        });
      locationSet('');
    }
  };

  return (
    <>
      <input
        type='text'
        value={location}
        onChange={event => locationSet(event.target.value)}
        onKeyPress={getCityLocation}
        placeholder='Enter Location'
      />
    </>
  );
};

export default SearchLocation;
