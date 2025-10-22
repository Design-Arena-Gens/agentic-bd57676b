import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const image = data.get('image') as File;
    const prompt = data.get('prompt') as string;

    if (!image || !prompt) {
      return NextResponse.json({ error: 'Image and prompt are required' }, { status: 400 });
    }

    console.log('API received:', { imageName: image.name, prompt });

    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 3000));

    // In a real application, you would call a video generation API here.
    // For this example, we'll return a placeholder video URL.
    const videoUrl = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4';

    return NextResponse.json({ videoUrl });
  } catch (error) {
    console.error('Error in generate-video API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
