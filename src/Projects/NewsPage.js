import React from 'react';
import Newsitem from './Newsitem';
import { useEffect, useState } from 'react'
import "./News.css"

function NewsPage() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=06f95801e3af43ada430d70a36e71006");
    const response = await data.json();
    //console.log(response.articles);
    setData(response.articles);
  }
  useEffect(() => {
    fetchData();
  })
  return (<>
  <div className='full'>
    <div className='main'>NewsPage
    <ul className='Container'>
      {data.map((item, index) => (
        <Newsitem key={index} title={item.title} description={item.description}
          img={item.urlToImage} url={item.url} />

      ))}

    </ul>
</div>
</div>
  </>
  )
}

export default NewsPage