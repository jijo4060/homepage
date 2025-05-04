import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
        access_key: process.env.WEB3_ACCESS_KEY,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: 'Web3Forms submission failed', error: result },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent!', data: result });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error', error }, { status: 500 });
  }
}