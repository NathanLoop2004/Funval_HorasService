
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGlobalGet(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


  async function fetchData() {
    const token = getCookie('token')
    try {

      const response = await axios.get(url,{
        headers: {
          Authorization: `${token}`
        }
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]); 

  return { data, error, loading }; 
}
