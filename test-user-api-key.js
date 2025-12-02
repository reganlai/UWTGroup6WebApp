const axios = require('axios');

const TV_API_URL = 'https://tcss-460-group-7-tv-shows-dataset-api-g4kq.onrender.com';
const API_KEY = '1234567890';

async function testWithUserKey() {
    console.log(`Testing TV Shows API with user-provided key: ${API_KEY}\n`);

    const endpoints = ['/api/tv-shows', '/tv-shows', '/api/tvshows', '/shows', '/api/shows'];

    for (const endpoint of endpoints) {
        try {
            console.log(`Trying ${endpoint}...`);
            const response = await axios.get(`${TV_API_URL}${endpoint}`, {
                headers: { 'X-API-Key': API_KEY }
            });
            console.log(`✓ SUCCESS on ${endpoint}!`);
            console.log('Status:', response.status);
            console.log('Response type:', Array.isArray(response.data) ? 'Array' : 'Object');
            if (Array.isArray(response.data) && response.data.length > 0) {
                console.log('Number of shows:', response.data.length);
                console.log('First TV show fields:', Object.keys(response.data[0]));
                console.log('Sample show:', JSON.stringify(response.data[0], null, 2).substring(0, 500));
            } else if (typeof response.data === 'object') {
                console.log('Response data:', JSON.stringify(response.data, null, 2).substring(0, 500));
            }
            return;
        } catch (error) {
            console.log(`  ✗ ${endpoint}: ${error.response?.status || error.message}`);
        }
    }

    console.log('\n❌ No working endpoint found with the provided API key.');
}

testWithUserKey();
