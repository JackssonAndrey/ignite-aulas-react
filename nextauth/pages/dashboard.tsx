import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api';

export default function Dashboard() {
  useEffect(() => {
    api.get('/me').then(response => console.log(response))
  }, []);

  const { user } = useContext(AuthContext);
  return <h1>Hello {user?.email}</h1>
}
