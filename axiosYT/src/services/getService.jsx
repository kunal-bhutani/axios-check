//  used axios as a service like a professional

import axiox from "axios";




const apiKey = import.meta.env.VITE_API_KEY;


 const api = axiox.create({
    baseURL:"http://www.omdbapi.com/"
})



export const getMovie = ()=>{
return api.get('',{
    params:{
        s:"titanic",
        apiKey: apiKey
    }
})
}
