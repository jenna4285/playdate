import Geocode from "react-geocode";

function latLon(address) {
    Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  )
};

export default latLon;
