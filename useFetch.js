import { useEffect,  useState } from 'react';

export const useFetch = (fetcher, args, dependencies = '') => {
  if(typeof fetcher === 'undefined') return

	const [data, setData] = useState();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

	useEffect(() => {
    setLoading(true)
    
		fetcher(args)
      .then(res => {
        setData(res)
        setLoading(false)  
        
      })
      .catch(err => {
        setLoading(false)
        setError(err)

      });
      
	}, [...dependencies]);

	return {
		data,
    loading,
    error,
		setData,
	};
};
