/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable prefer-template */

const weatherIcons = {
  'clear-day': 'sun',
  'clear-night': 'moon-stars',
  rain: 'cloud-rain',
  snow: 'cloud-snow',
  sleet: 'cloud-drizzle',
  wind: 'cloud-wind',
  fog: 'cloud-fog-2',
  cloudy: 'clouds',
  'partly-cloudy-day': 'clouds-sun',
  'partly-cloudy-night': 'clouds-moon',
  hail: 'cloud-hail',
  thunderstorm: 'cloud-rain-lightning',
  tornado: 'tornado',
};

function getIcon(weatherDescription) {
  const svgFileName = weatherIcons[weatherDescription];

  return require('../images/' + svgFileName + '.svg');
}

export default getIcon;

