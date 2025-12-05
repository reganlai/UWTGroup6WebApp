import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.TV_SHOWS_API_URL;
const API_KEY = process.env.TV_SHOWS_API_KEY;

// Transform API response to match our TVShow type
function transformTVShow(apiShow: any) {
    return {
        id: apiShow.id,
        name: apiShow.name,
        overview: apiShow.overview || '',
        posterPath: apiShow.poster_url || '',
        backdropPath: apiShow.backdrop_url || '',
        firstAirDate: apiShow.first_air_date || '',
        voteAverage: parseFloat(apiShow.tmdb_rating) || 0,
        voteCount: apiShow.vote_count || 0,
        genres: Array.isArray(apiShow.genres)
            ? apiShow.genres.map((genre: string, index: number) => ({
                id: index + 1,
                name: genre
            }))
            : [],
        numberOfSeasons: apiShow.seasons || 0,
        numberOfEpisodes: apiShow.episodes || 0,
        episodeRunTime: [],
        tagline: '',
        cast: [],
        creators: [],
        status: apiShow.status || '',
        networks: []
    };
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const search = searchParams.get('search');
        const page = searchParams.get('page');
        const limit = searchParams.get('limit');

        const queryParams = new URLSearchParams();
        if (search) queryParams.append('search', search);
        if (page) queryParams.append('page', page);
        if (limit) queryParams.append('limit', limit);

        const url = `${API_URL}/api/shows${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

        const response = await fetch(url, {
            headers: {
                'X-API-Key': API_KEY || ''
            }
        });

        const apiData = await response.json();

        if (!response.ok) {
            return NextResponse.json(apiData, { status: response.status });
        }

        // Transform the API response
        if (apiData.success && Array.isArray(apiData.data)) {
            const transformedData = apiData.data.map(transformTVShow);
            return NextResponse.json(transformedData);
        }

        return NextResponse.json([]);
    } catch (error: any) {
        console.error('Proxy error:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to fetch TV shows' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const response = await fetch(`${API_URL}/api/shows`, {
            method: 'POST',
            headers: {
                'X-API-Key': API_KEY || '',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(data, { status: response.status });
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Proxy error:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to create TV show' },
            { status: 500 }
        );
    }
}
