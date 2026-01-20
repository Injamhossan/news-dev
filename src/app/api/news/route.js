import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/News';

export async function GET(req) {
  await dbConnect();

  try {
    const { searchParams } = new URL(req.url);
    const country = searchParams.get("country") || "us";
    const category = searchParams.get("category") || "general";
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const language = searchParams.get("language");
    const source = searchParams.get("source");
    const status = searchParams.get("status") || "active";

    const API_KEY = process.env.NEWS_API_KEY;

    try {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
    
        if (data.status === "ok" && Array.isArray(data.articles)) {
          const operations = data.articles.map(article => ({
            updateOne: {
              filter: { url: article.url },
              update: {
                $set: {
                  source: article.source,
                  author: article.author,
                  title: article.title,
                  description: article.description,
                  url: article.url,
                  urlToImage: article.urlToImage,
                  publishedAt: new Date(article.publishedAt),
                  content: article.content,
                  category: category, 
                  country: country,
                },
                $setOnInsert: {
                    status: 'active',
                    fetchedAt: new Date()
                }
              },
              upsert: true
            }
          }));
    
          if (operations.length > 0) {
            await News.bulkWrite(operations);
          }
        }
    } catch (fetchError) {
        console.error("External API Fetch Failed:", fetchError);
    }

    // 3. Query DB with simplified filters
    const query = {
        status: status,
    };

    if (country) query.country = country;
    if (category && category !== 'general') query.category = category;
    
    // Simple Search Implementation
    if (source) {
        query.$or = [
            { title: { $regex: source, $options: 'i' } },
            { description: { $regex: source, $options: 'i' } },
            { 'source.name': { $regex: source, $options: 'i' } }
        ];
    }

    const articles = await News.find(query).sort({ publishedAt: -1 }).limit(100);

    return NextResponse.json({ articles });
  } catch (err) {
    console.error("API Error", err);
    return NextResponse.json(
      { articles: [], error: "API failed" },
      { status: 500 }
    );
  }
}

