export const checkCityName = (cityName) => {
  if (!cityName || !cityName.length) {
    return false;
  }

  const pattern = /[~!%@#$^&*()_+|<>?:{}0-9]/;
  const result = pattern.test(cityName) ? false : true;

  return result;
}