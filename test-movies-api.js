const axios = require('axios');

const MOVIES_API_URL = 'https://dataset-web-api.onrender.com';
const API_KEY = 'dev-key';

async function testMoviesAPI() {
    try {
        console.log('Testing Movies API...\n');
        const response = await axios.get(`${MOVIES_API_URL}/api/movies`, {
            headers: { 'X-API-Key': API_KEY }
        });

        console.log('Status:', response.status);
        console.log('Response type:', Array.isArray(response.data) ? 'Array' : 'Object');

        if (Array.isArray(response.data) && response.data.length > 0) {
            console.log('Number of movies:', response.data.length);
            console.log('\nFirst movie fields:', Object.keys(response.data[0]));
            console.log('\nFirst movie complete:');
            console.log(JSON.stringify(response.data[0], null, 2));

            console.log('\n\nChecking rating fields:');
            console.log('vote_average:', response.data[0].vote_average);
            console.log('voteAverage:', response.data[0].voteAverage);
            console.log('rating:', response.data[0].rating);
            console.log('tmdb_rating:', response.data[0].tmdb_rating);
        } else if (typeof response.data === 'object') {
            console.log('Response data:', JSON.stringify(response.data, null, 2).substring(0, 1000));
        }
    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
    }
}

testMoviesAPI();
