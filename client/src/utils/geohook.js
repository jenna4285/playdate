import Geocode from "react-geocode";

export function latLon() {
    Geocode.fromAddress(`${user.address}`).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  )
};
