const tomorrow = document.querySelector("#tomorrow");
const afterTomorrow = document.querySelector("#afterTomorrow");
let secTwo = document.getElementById("secTwo");
const searchForm = document.querySelector(".search-location");

//current
let today = document.getElementById("today"),
    todayDate = document.getElementById("today-date"),
    cityLocation = document.getElementById("location"),
    todayDegree = document.getElementById("today-degree"),
    todayIcon = document.getElementById("today-icon"),
    description = document.getElementById("today-description"),
    humidty = document.getElementById("humidty"),
    wind = document.getElementById("wind"),
    compass = document.getElementById("compass"),
    searchBar = document.getElementById("search-bar");
//nextDay
let
    nextDayIcon = document.getElementById("nextDay-icon"),
    maxDegree = document.getElementById("max-degree"),
    minDegree = document.getElementById("min-degree"),
    nextDayDescription = document.getElementById("nextDay-description");
//AfterNextDay
let afterTomorrowIcon = document.getElementById("afterTomorrowIcon"),
    afterTomorrowMaxD = document.getElementById("afterTomorrowMaxD"),
    afterTomorrowMinD = document.getElementById("afterTomorrowMinD"),
    afterTomorrowDescription = document.getElementById("afterTomorrowDescription");
// console.log(nextDayIcon, maxDegree, minDegree, nextDayDescription)

async function getWeatherData(currentCity = "cairo") {
    apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${currentCity}&days=3`);
    responseData = await apiResponse.json();
    // console.log(responseData);
    displayTodayWeather();
    displayNextDayWeather();
    presAfterNextDayWeather();
}
getWeatherData();

function displayTodayWeather() {
    cityLocation.innerHTML = responseData.location.name;
    todayDegree.innerHTML = responseData.current.temp_c + "°C";
    todayIcon.setAttribute("src", `https:${responseData.current.condition.icon}`);
    description.innerHTML = responseData.current.condition.text;
    humidty.innerHTML = responseData.current.humidity;
    wind.innerHTML = responseData.current.wind_kph;
    compass.innerHTML = responseData.current.wind_dir;
}

function displayNextDayWeather() {
    nextDayIcon.setAttribute(
        "src", `https:${  responseData.forecast.forecastday[1].day.condition.icon}`);
    maxDegree.innerHTML = responseData.forecast.forecastday[1].day.maxtemp_c + "°C";
    minDegree.innerHTML = responseData.forecast.forecastday[1].day.mintemp_c + "°C";
    afterTomorrowDescription.innerHTML = responseData.forecast.forecastday[1].day.condition.text;

}

function presAfterNextDayWeather() {
    afterTomorrowIcon.setAttribute(
        "src",
        `https:${responseData.forecast.forecastday[2].day.condition.icon}`
    );
    afterTomorrowMaxD.innerHTML =
        responseData.forecast.forecastday[2].day.maxtemp_c + "°C";
    afterTomorrowMinD.innerHTML =
        responseData.forecast.forecastday[2].day.mintemp_c + "°C";
    nextDayDescription.innerHTML = responseData.forecast.forecastday[2].day.condition.text;

}


searchBar.addEventListener("keyup", (e) => {
    e.preventDefault();
    currentCity = searchBar.value;
    // console.log(currentCity);
    getWeatherData(currentCity);
});

function getMonth() {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var today = new Date();
    let date = today.getDate();
    let month = months[today.getMonth()];
    // console.log(date, month);
    let dayOfMonth = document.querySelector("#dayOfMonth");
    dayOfMonth.innerHTML = date + month;
    return date + month;
}
getMonth();

function getDay() {
    var today = new Date();
    var day = today.getDay();
    var dayList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday ",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    //currentDay
    // console.log("Today is : " + dayList[day] + ".");
    let date = document.querySelector("#date");
    date.innerHTML = dayList[day];

    //Tomorrow
    var nextDay = new Date();
    var dayNext = nextDay.getDay() + 1;
    // console.log("Tomorrow is : " + dayList[dayNext] + ".");
    next = dayList[dayNext];
    tomorrow.innerHTML = dayList[dayNext];

    //AfterTomorrow
    var ANextDay = new Date();
    var AfDayNext = ANextDay.getDay() + 2;
    // console.log("After Tomorrow is : " + dayList[AfDayNext] + ".");
    after = dayList[AfDayNext];
    afterTomorrow.innerHTML = dayList[AfDayNext];
    return dayList[day];
}
getDay();