
"use client"
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [country, setCountry] = useState("us");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
useEffect (() => {
  
  const loadNews = async () => {
    setLoading(true);

    
  try {
    const res = await fetch(`api/news?country=${country}`);
    const data = await res.json();
    setArticles(Array.isArray(data.articles) ? data.articles : []);
  } catch(err){
    console.log("Error Loading News",err);
    setArticles([]);
  };

  setLoading(false);
};

loadNews();

}, [country,])

  return (
   <>
   {/* Navbar */}

  <Navbar/>
    {/* Page Content */}
    <div className="max-w-6xl mx-auto p-6">

      {/* Page Header */}
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-black">Top Headlines</h1>

        {/* Country DropDown */}
        <select className="text-black" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="us">USA</option>
          <option value="gb">UK</option>
          <option value="in">India</option>
          <option value="ae">Argentina</option>
          <option value="bd">Bangladesh</option>
          <option value="ca">Canada</option>
          <option value="ru">Russia</option>
        </select>
      </div>
      
      {/* Loader */}

    {loading ? (
      <Loader/>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map((news, i) => <NewsCard key={i} data={news}/>)
        ) : (
          <p className="text-black justify-center">No News Available.</p>
        )}

      </div>
    )}
      <div>
      </div>
    </div>

  {/* Footer */}
  <Footer/>
   </>
  );
}
