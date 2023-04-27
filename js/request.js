// let notificationElement = document.querySelectorAll('');

// async function getData() {
// 
// }
// getData();
const requestCity = async(city) => {
    // const baseUrl = `https://www.weatherapi.com/docs/conditions.json`;
    // const query = `?q=${city}&appid=${key}`;
    let respond = await fetch(`https://www.weatherapi.com/docs/conditions.json?key=ca0f3c24be3249f0815225114232402&q=${city}&days=3`);
    let data = await respond.json();
    return data;
};