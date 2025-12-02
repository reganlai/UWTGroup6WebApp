const axios = require('axios');

const TV_API_URL = 'https://tcss-460-group-7-tv-shows-dataset-api-g4kq.onrender.com';
const API_KEY = '1234567890';

async function getFullSample() {
    try {
        const response = await axios.get(`${TV_API_URL}/api/shows`, {
            headers: { 'X-API-Key': API_KEY }
        });

        console.log('Full response structure:');
        console.log(JSON.stringify(response.data, null, 2).substring(0, 3000));

        if (response.data.data && response.data.data.length > 0) {
            console.log('\n\nFirst show complete:');
            console.log(JSON.stringify(response.data.data[0], null, 2));
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getFullSample();
