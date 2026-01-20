import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/News';

export async function GET(req) {
  // connect to database
  await dbConnect();

  try {
    // get search params
    const { searchParams } = new URL(req.url);
    const country = searchParams.get("country") || "us";
    const category = searchParams.get("category") || "general";
    const source = searchParams.get("source");
    const status = searchParams.get("status") || "active";

    let query = {
        status: status,
    };

    if (country) {
        query.country = country;
    }
    
    if (category && category !== 'general') {
        query.category = category;
    }
    
    if (source) {
        query.$or = [
            { title: { $regex: source, $options: 'i' } },
            { description: { $regex: source, $options: 'i' } },
            { 'source.name': { $regex: source, $options: 'i' } }
        ];
    }

    // get articles from db
    const articles = await News.find(query).sort({ publishedAt: -1 }).limit(100);

    return NextResponse.json({ articles });
  } catch (err) {
    console.log("Something went wrong", err);
    return NextResponse.json(
      { articles: [], error: "Failed to load news" },
      { status: 500 }
    );
  }
}

