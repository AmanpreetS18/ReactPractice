import React from 'react';
import "./News.css"


export default function Newsitem({key,title,description,img,url}) {
   
  return (<>
    <div className='Card'>
      <h1 className='title'>{title}</h1>
      <p className='desc'>{description}</p>
      
      <div className='imgcont'>
      <img className='image' src={img?img:"https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg"} alt="img"/>
      </div>
      <a className="link" href={url}>Read More</a>
    </div>
    </>
  )
}
