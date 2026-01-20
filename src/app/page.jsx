"use client"
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import FilterBar from "@/components/FilterBar";
import { useEffect, useState } from "react";


export default function Home() {

  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [source, setSource] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
            country,
            category,
            ...(source && { source }),
        });

        const res = await fetch(`api/news?${params}`);
        const data = await res.json();
        setArticles(Array.isArray(data.articles) ? data.articles : []);
      } catch(err){
        console.error("Error Loading News", err);
        setArticles([]);
      };
      setLoading(false);
    };

    const timeoutId = setTimeout(() => {
        loadNews();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [country, category, source]);

  return (
   <div className="min-h-screen flex flex-col bg-white">
    <Navbar/>
    <main className="max-w-7xl mx-auto p-6 flex-1 w-full">
      <div className="mb-8">
        <FilterBar 
            country={country} setCountry={setCountry}
            category={category} setCategory={setCategory}
            source={source} setSource={setSource}
        />
      </div>
      
      {loading ? (
        <Loader/>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(articles) && articles.length > 0 ? (
            articles.map((news, i) => <NewsCard key={i} data={news}/>)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
            </div>
          )}
        </div>
      )}
    </main>
    <Footer/>
   </div>
  );
}
