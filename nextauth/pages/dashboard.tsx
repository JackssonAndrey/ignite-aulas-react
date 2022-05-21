import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/apiClient';
import { withSSRAuth } from '../utils/withSSRAuth';
import { setupAPIClient } from '../services/api';
import { useCan } from '../hooks/useCan';
import { Can } from '../components/Can';

export default function Dashboard() {
  useEffect(() => {
    api.get('/me').then(response => console.log(response))
  }, []);

  const { user } = useContext(AuthContext);
  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list']
  });
  return (
    <>
      <h1>Hello {user?.email}</h1>

      <Can permissions={['metrics.list']}>
        <h1>Métricas</h1>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');
  console.log(response.data)

  return {
    props: {}
  }
})
