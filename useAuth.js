import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { verifyUser } from '../services/user';

/**
 * Hook used everytime we want to check for validity of the JWT token
 * before entering a route or to have that user id available in the component
 * outside of the protected routes. It won't be used for Post since that would
 * mean making a JWT verification for each Post rendered
 */
export function useAuth() {
	const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  
	useEffect(() => {
    setLoading(true)

		verifyUser()
      .then(authResult => {
        setUser(authResult)
        setLoading(false)

      })
      .catch(err => {
        setError(err)
        setLoading(false)

      })
	}, []);
  
	return { user, loading, error };
}
