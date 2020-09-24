import React, { useState, useEffect } from "react";

import NewComponent from "./WeatherCard/New_Component.js";
import "/Users/manav/my-app/src/App.css";
import Articles from "./News/Articles.js";

function WeatherEngine({ location }) {
  // init for weather state variables
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
  });
  // init for news article state variables
  const [article, setArticle] = useState({
    title: [],
    author: [],
    publishedAt: [],
    description: [],
    url: [],
    content: [],
    urlToImage: [],
  });
  const [total, setTotal] = useState(0);
  //init of variable arrays
  let titleArr = [];
  let authorArr = [];
  let publishedAtArr = [];
  let descriptionArr = [];
  let urlArr = [];
  let contentArr = [];
  let urlToImageArr = [];
  // get weather function
  const getWeather = async (q) => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=07875ba0bf52fc9064b690c3f8e2d3e4`
    );
    const resJSON = await apiRes.json();
    setWeather({
      temp: resJSON.main.temp,
      city: resJSON.name,
      country: resJSON.sys.country,
      condition: resJSON.weather[0].main,
    });
    getArticle(resJSON.sys.country);
  };
  // get new article function
  const getArticle = async (q) => {
    const apiRes = await fetch(
      `http://newsapi.org/v2/top-headlines?country=${q}&apiKey=cf0c655acdf64e688471209acb36b3eb`
    );
    const resJSON = await apiRes.json();
    console.log("get Articles");
    setTotal(resJSON.totalResults);
    const articleList = resJSON.articles;
    for (var i = 0; i < 10; i++) {
      titleArr.push(articleList[i].title);
      if (articleList[i].author == null) authorArr.push("");
      else authorArr.push(articleList[i].author);
      publishedAtArr.push(articleList[i].publishedAt);
      descriptionArr.push(articleList[i].description);
      urlArr.push(articleList[i].url);
      urlToImageArr.push(articleList[i].urlToImage);
      contentArr.push(articleList[i].content);
    }
    console.log(authorArr.length);
    setArticle({
      title: titleArr,
      author: authorArr,
      publishedAt: publishedAtArr,
      description: descriptionArr,
      url: urlArr,
      urlToImage: urlToImageArr,
      content: contentArr,
    });
  };
  // handle Search from the form
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="AppPage">
      <div className="leftSide">
        <Articles
          className="news"
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          description={article.description}
          content={article.content}
          publishedAt={article.publishedAt}
          totalResults={total}
        />
      </div>
      <div className="rightSide">
        <NewComponent
          temp={weather.temp}
          condition={weather.condition}
          city={weather.city}
          country={weather.country}
        />
        <form>
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
          <button onClick={(e) => handleSearch(e)}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default WeatherEngine;
