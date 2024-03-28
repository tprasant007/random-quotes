import React from "react"
import { useEffect, useState } from 'react'

function App() {
  const [quotes, setQuotes] = useState({
    quote : "",
    author : ""
  })


  useEffect(()=> {
   getQuotes()
  }, [])

  function getQuotes() {
    fetch(`https://quotes-api-self.vercel.app/quote`)
      .then(res => res.json())
      .then(data => setQuotes({
        quote: data.quote,
        author: data.author
      }))
   }

   const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quotes.quote}" - ${quotes.author}`
  )}`;


  return (
    <>
      <div id="quote-box">
        <div id="text">{`${quotes.quote}`}</div>
        <div id="author">{`-${quotes.author}`}</div>
        <div className="buttons"> 
            <a href={tweetUrl} target='_blank' className="button" id="tweet-quote"><i className="fa fa-twitter"></i></a>
            <button id="new-quote" className="button" onClick={getQuotes}>Get New Quote</button>
        </div>
      </div>
    </>
  )
}

export default App
