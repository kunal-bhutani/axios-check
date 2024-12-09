import React, { useEffect, useState } from 'react'
import { getMovie } from '../services/getService';
import axios from 'axios'
import Card from './Card';

const Movie = () => {
    const [movie , setMovie] = useState([]);
    // const api = "http://www.omdbapi.com/?i=tt3896198&apikey=f9f58907&s=titanic" // normal way

    const getMovieData =  async()=>{
        try {
            
            const res = await getMovie();  // to get movie i had used service like professonal 
            console.log(res.data.Search);
            setMovie(res.data.Search)
            
        } catch (error) {
            console.log(error.message);
            console.log(error.response.data);
            console.log(error.response.status);
        }
    }
    useEffect(()=>{
        getMovieData()
    },[])
  return ( // item mapped and send to a card to display but to send we required a unique key and the data
   movie.map((currEle)=>{
    return<Card key={currEle.imdbID} movieData= {currEle}/>
   })
  )
}

export default Movie
