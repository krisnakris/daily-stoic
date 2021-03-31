import { useState, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';


export default function useFetch (url) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setLoading(true);
    trackPromise(
      fetch(url)
        .then(response => 
          response.json()
        )
        .then(json => {
          setData(json)
        })
        .catch(err => {
          setError(err)
        }) 
      )
      // .finally(_ => {
      //   setLoading(false);
      // })
  }, [])

  return {
    data, loading, error, setData
  }
}