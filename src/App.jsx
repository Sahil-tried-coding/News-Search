import { useState } from "react";
import SearchBox from "./component/SearchBox";
import Spinner from "./component/Spinner";
function App() {
  let apiKey = "3a377b159da0423ab438435956b16853";
  const [newsArticle, setNewsArticle] = useState([]);
  const [loader, setLoader] = useState(false);

  async function handleNews(query) {
    setLoader(true);
    try{
      let respones = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`
      );
      let data = await respones.json()
      setNewsArticle(data.articles);
      setLoader(false);
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <div className=" max-h-max  sm:overflow-hidden  decoration-4 sm:min-h-[1500px] w-screen bg-[#00246B]">
      <div className="min-h-[100vh] ">
        <div className=" text-2xl text-center text-[#CADCFC] font-semibold sm:text-3xl underline decoration-solid decoration-white">
          Stay Updated
        </div>
        <br />
        <div className="text-lg text-center text-white font-semibold">
          search for what news your looking for
        </div>
        <br />
        <SearchBox onSearch={handleNews} />
        {loader ? (
          <Spinner className="ml-[10rem]" />
        ) : (
          <div className="flex sm:overflow-hidden h-max-h  flex-wrap justify-center gap-4 p-3">
            {/* <ul className="flex flex-col sm:gird sm:grid-cols-2 sm:grid-rows-3 sm:w-full p-3 "> */}
            {newsArticle.map((article, index) => (
              <div
                key={index}
                className="border  sm:w-[300px] max-w-max border-white p-3   my-5"
              >
                <h3 className="font-semibold  text-white text-xl">
                  {article.title}
                </h3>
                <img
                  src={article.urlToImage || "newsop.jpg"}
                  alt={article.title}
                />
                <p className="text-[#CADCFC] font-semibold">
                  {article.description}
                </p>
                <a href={article.url} className="text-white">
                  Read More
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

