const dotenv = require('dotenv');

dotenv.config() 

const config = {
    port: process.env.PORT,
    env: process.env.ENV,
    apiUrl: process.env.API_URL
}

module.exports = config;
