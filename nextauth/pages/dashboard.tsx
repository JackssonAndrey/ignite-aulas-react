import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/apiClient';
import { withSSRAuth } from '../utils/withSSRAuth';
import { setupAPIClient } from '../services/api';

export default function Dashboard() {
  useEffect(() => {
    api.get('/me').then(response => console.log(response))
  }, []);

  const { user } = useContext(AuthContext);
  return <h1>Hello {user?.email}</h1>
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');
  console.log(response.data)

  return {
    props: {}
  }
})
