document.addEventListener('DOMContentLoaded', () => {
    const navBurger = document.querySelector('.navburger');
    const navContent = document.querySelector('.navcontent');
  
    if (navBurger && navContent) {
      navBurger.addEventListener('click', () => {
        navContent.classList.toggle('active');
  
        const icon = navBurger.querySelector('i');
        icon.classList.toggle('bi-list');
        icon.classList.toggle('bi-x') // x icon;
  
        console.log("Nav content toggled");
      });
    }
  });

// Weather API

const apiKey = "531c3ff5f9ed2866cce68ec8f0697097";
const lat = 21.1619; // used lat/lon for more accuracy
const lon = -86.8515;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

const weatherIcons = {
  /* checked the weather condistions on the openweathermap website
  thats available in Cancun to use bootstrap icons */
  Clear: "bi-brightness-high",
  Clouds: "bi-cloud",
  Rain: "bi-cloud-rain",
  Drizzle: "bi-cloud-drizzle",
  Thunderstorm: "bi-cloud-lightning",
  Mist: "bi-water",
  Smoke: "bi-wind",
  Haze: "bi-cloud-haze",
  Dust: "bi-cloud-haze2",
  Fog: "bi-cloud-fog",
  Sand: "bi-cloud-haze2",
  Ash: "bi-cloud-haze2",
  Squall: "bi-cloud-lightning-rain",
  Tornado: "bi-tornado"
};

console.log("Checking weather using lat/lon:", lat, lon);

fetch(url)
  .then(res => res.json())
  .then(data => {
    const weather = data.weather[0];
    const temp = Math.round(data.main.temp);
    const cityName = data.name;
    const countryB = data.sys.country;

    const icon = document.getElementById("icon");
    const iconClass = weatherIcons[weather.main] || "bi-question-circle";
    icon.className = "weather-icon bi " + iconClass;
    icon.setAttribute("title", weather.description);

    temperature.textContent = temp + "°C";
    description.textContent = weather.description;
    city.textContent = cityName;
    country.textContent = countryB;
  })
  .catch(err => console.error("Weather fetch error:", err));

