import Geocode from 'react-geocode'

export async function geoCoord(coordInput){
  const ApiKey = process.env.REACT_APP_GOOGLE_MAPS_GEOCODING_API

  Geocode.setApiKey(ApiKey)
  Geocode.setLanguage('en')
  Geocode.setRegion('CA')

  const result = await Geocode.fromAddress(coordInput).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location
      return { latitude: lat, longitude: lng } 
    },
    error => {
      console.error(error)
    }
  )
  return result
}

// Geocode.fromLatLng('46.220537', '-74.552723').then(
//   response => {
//     const address = response.results[0].formatted_address
//     console.log(address)
//   },
//   error => {
//     console.error(error)
//   }
// )