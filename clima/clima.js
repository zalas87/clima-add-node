const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0d656f7a764e231f3809fd2ad3eb1a0f`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}