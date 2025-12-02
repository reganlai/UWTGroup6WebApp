import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.MESSAGES_WEB_API_URL;
const API_KEY = process.env.MESSAGES_WEB_API_KEY;

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const search = searchParams.get('search');

        const url = search
            ? `${API_URL}/api/movies?search=${encodeURIComponent(search)}`
            : `${API_URL}/api/movies`;

        const response = await fetch(url, {
            headers: {
                'X-API-Key': API_KEY || ''
            }
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(data, { status: response.status });
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Proxy error:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to fetch movies' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const response = await fetch(`${API_URL}/api/movies`, {
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
            { success: false, message: error.message || 'Failed to create movie' },
            { status: 500 }
        );
    }
}
