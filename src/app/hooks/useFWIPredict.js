// hooks/useFWIPredict.js
import { useState, useEffect } from 'react';

export function useFWIPredict(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);
    
    fetch(`http://localhost:8000/predict?city=${city}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then(result => {
      setData(result);
    })
    .catch(err => {
      setError(err.message);
    })
    .finally(() => {
      setLoading(false);
    });

  }, [city]);

  const refetch = () => {
    setLoading(true);
    setError(null);
    
    fetch(`http://localhost:8000/predict?city=${city}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(result => setData(result))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
  };

  return { data, loading, error, refetch };
}