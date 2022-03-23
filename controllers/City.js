import db from '../models/index.cjs'
import { checkCityName } from '../util/Validation.js'

const city = {};

const keywordList = {
  '항공': 'flightInfo', 
  '숙소': 'accomInfo', 
  '관광': 'touristSpot', 
  '맛집': 'restaurantInfo'
};

city.info = async (req, res) => {
  const { name } = req.params; // 제주
  const { keyword } = req.query; // 항공, 숙소, 관광, 맛집
  console.log(req.body)

  // 도시명 유효성 체크 
  if (!checkCityName(name)) {
    res.status(404).send('Invalid city name.');
    return;
  }

  // 키워드 유효성 체크
  if (keyword && !keywordList[keyword]) {
    res.status(404).send('Invalid keyword.');
    return;
  }

  // 소문자 전환 && 공백제거
  let cityName = name.toLowerCase();
  cityName = cityName.replace(/\s/gi, '');

  const EnPattern = /[a-zA-Z]/;
  const dbColumn = EnPattern.test(cityName) ? 'cityEn' : 'cityKor';

  const findItem = await db.City.findOne({ where: { [dbColumn]: cityName } });
  if (!findItem) {
    res.send('No matching city names.');
    return;
  }

  let dataList = findItem['basicInfo'];
  if (keywordList[keyword]) {
    dataList = findItem[keywordList[keyword]];
  }
  
  res.send({
    countryKor: findItem['countryKor'],
    countryEn: findItem['countryEn'],
    cityKor: findItem['cityKor'],
    cityEn: findItem['cityEn'],
    category: findItem['category'],
    dataList: dataList
  });
}

export default city;