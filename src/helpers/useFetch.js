import { useState, useEffect } from 'react';

export default function useFetch (url) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
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
      .finally(_ => {
        setLoading(false);
      })
  }, [])

  return {
    data, loading, error, setData
  }
}