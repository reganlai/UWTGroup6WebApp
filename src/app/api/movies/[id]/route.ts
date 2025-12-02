import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.MESSAGES_WEB_API_URL;
const API_KEY = process.env.MESSAGES_WEB_API_KEY;

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const response = await fetch(`${API_URL}/api/movies/getID/${id}`, {
            headers: {
                'X-API-Key': API_KEY || ''
            }
        });

        const result = await response.json();

        if (!response.ok) {
            return NextResponse.json(result, { status: response.status });
        }

        // API returns { success: true, data: {...} }, we just want the data
        return NextResponse.json(result.data || result);
    } catch (error: any) {
        console.error('Proxy error:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Failed to fetch movie' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const response = await fetch(`${API_URL}/api/movies/deleteID/${id}`, {
            method: 'DELETE',
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
            { success: false, message: error.message || 'Failed to delete movie' },
            { status: 500 }
        );
    }
}
