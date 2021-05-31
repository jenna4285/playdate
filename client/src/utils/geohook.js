import Geocode from "react-geocode";

<<<<<<< HEAD
export function latLon() {
    Geocode.fromAddress(`${user.address}`).then(
=======
function latLon(address) {
    Geocode.fromAddress(address).then(
>>>>>>> 41bbc66235031fd1767a13c43c6e038fbbee38c5
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  )
};
<<<<<<< HEAD
=======

export default latLon;
>>>>>>> 41bbc66235031fd1767a13c43c6e038fbbee38c5
