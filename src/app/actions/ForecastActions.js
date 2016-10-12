export function getForecast(longitude, latitude) {
  return {
    type: 'GET_LOC_COORDINATES',
    longitude,
    latitude
  };
}
