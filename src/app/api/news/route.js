import { NextResponse } from 'next/server';

export async function GET(req) {
 try {
       const {searchParams} = new URL(req.url);
    const country = searchParams.get("country") || "us";

    const API_KEY= process.env.NEWS_API_KEY

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data)
 } catch (err){
    console.log("API Error", err);
    return NextResponse.json(
        {articles : [], error: "API failed"},
        {status:500}
    )
 }
}

