import { useState, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';


export default function useFetch (url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    trackPromise(
      fetch(url)
        .then(response => 
          response.json()
        )
        .then(json => {
          setData(json)
        })
        .catch(err => {
          console.log(err)
        }) 
      )
  
  }, [])

  return {
    data, setData
  }
}