/**
 * @param {meterPerSec}: wind speed in m/s
 * @return: wind speed in km/h
 */
 

function windToKmPerHour(meterPerSec) {
  return (meterPerSec * 3.6);
}

function getWeatherIcon(iconCode, size) {
  const imgSize = size === 1 ? '' : '@2x';
  return `${IMG_URL}/${iconCode}${imgSize}.png`;
}
