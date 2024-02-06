const arr = [
  {
    img: "01d.png ",
    src: "http://openweathermap.org/img/wn/01d@2x.png",
    src1: "Sunny.png",
  },
  {
    img: "01n.png ",
    src: "http://openweathermap.org/img/wn/01n@2x.png",
    src1: "Clear.png",
  },
  {
    img: "02d.png ",
    src: "http://openweathermap.org/img/wn/02d@2x.png",
    src1: "PartlyCloudyDay.png",
  },
  {
    img: "02n.png ",
    src: "http://openweathermap.org/img/wn/02n@2x.png",
    src1: "PartlyCloudyNight.png",
  },
  {
    img: "03d.png ",
    src: "http://openweathermap.org/img/wn/03d@2x.png",
    src1: "Cloudy.png",
  },
  {
    img: "03n.png ",
    src: "http://openweathermap.org/img/wn/03n@2x.png",
    src1: "Overcast.png",
  },
  {
    img: "04d.png ",
    src: "http://openweathermap.org/img/wn/04d@2x.png",
    src1: "Untitled.png",
  },
  {
    img: "04n.png ",
    src: "http://openweathermap.org/img/wn/04n@2x.png",
    src1: "Untitled.png",
  },
  {
    img: "09d.png ",
    src: "http://openweathermap.org/img/wn/09d@2x.png",
    src1: "IsoRainSwrsDay.png",
  },
  {
    img: "09n.png ",
    src: "http://openweathermap.org/img/wn/09n@2x.png",
    src1: "IsoRainSwrsNight.png",
  },
  {
    img: "10d.png ",
    src: "http://openweathermap.org/img/wn/10d@2x.png",
    src1: "ModSnowSwrsDay.png",
  },
  {
    img: "10n.png ",
    src: "http://openweathermap.org/img/wn/10n@2x.png",
    src1: "ModSnowSwrsNight.png",
  },
  {
    img: "11d.png ",
    src: "http://openweathermap.org/img/wn/11d@2x.png",
    src1: "PartCloudRainThunderDay.png",
  },
  {
    img: "11n.png ",
    src: "http://openweathermap.org/img/wn/11n@2x.png",
    src1: "PartCloudRainThunderNight.png",
  },
  {
    img: "13d.png ",
    src: "http://openweathermap.org/img/wn/13d@2x.png",
    src1: "ModSnowSwrsDay.png",
  },
  {
    img: "13n.png ",
    src: "http://openweathermap.org/img/wn/13n@2x.png",
    src1: "ModSnowSwrsNight.png",
  },
  {
    img: "50d.png ",
    src: "http://openweathermap.org/img/wn/50d@2x.png",
    src1: "Mist.png",
  },
  {
    img: "50n.png ",
    src: "http://openweathermap.org/img/wn/50n@2x.png",
    src1: "Mist.png",
  },
];

export function img(conditon) {
  const img = arr.filter(function (value) {
    return value.img.includes(conditon);
  });
  return img[0].src1;
}

export function kelvinToCelcius(temp) {
  return temp - 273.15;
}
