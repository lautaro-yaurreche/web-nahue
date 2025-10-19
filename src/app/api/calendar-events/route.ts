import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!apiKey || !calendarId) {
      return NextResponse.json(
        { error: 'Missing Google Calendar configuration' },
        { status: 500 }
      );
    }

    const calendar = google.calendar({ version: 'v3', auth: apiKey });

    // Obtener eventos desde hoy hasta 1 año en el futuro
    const now = new Date();
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: now.toISOString(),
      timeMax: oneYearFromNow.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const allEvents = response.data.items || [];

    // Transformar eventos a un formato más simple
    const blockedDates = allEvents.map((event: any) => ({
      start: event.start?.date || event.start?.dateTime,
      end: event.end?.date || event.end?.dateTime,
      summary: event.summary,
    }));

    return NextResponse.json({ blockedDates });
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch calendar events' },
      { status: 500 }
    );
  }
}
