const axios = require('axios');

const TV_API_URL = 'https://tcss-460-group-7-tv-shows-dataset-api-g4kq.onrender.com';

async function testTVShowsAPI() {
    console.log('Testing TV Shows API with X-API-Key header...\n');

    // Try common endpoint patterns with API key header
    const endpoints = ['/api/tv-shows', '/tv-shows', '/api/tvshows'];
    const testKeys = ['test', 'dev-key', ''];

    for (const key of testKeys) {
        console.log(`\nTrying with API key: "${key || '(empty)'}"`);
        for (const endpoint of endpoints) {
            try {
                const response = await axios.get(`${TV_API_URL}${endpoint}`, {
                    headers: { 'X-API-Key': key }
                });
                console.log(`✓ SUCCESS on ${endpoint}!`);
                console.log('Response type:', Array.isArray(response.data) ? 'Array' : 'Object');
                if (Array.isArray(response.data) && response.data.length > 0) {
                    console.log('First TV show fields:', Object.keys(response.data[0]));
                    console.log('Sample:', JSON.stringify(response.data[0], null, 2).substring(0, 400));
                }
                return; // Stop on first success
            } catch (error) {
                console.log(`  ${endpoint}: ${error.response?.status || error.message}`);
            }
        }
    }

    console.log('\n❌ No working endpoint found. You need the correct API key from Group 7.');
}

testTVShowsAPI();
