import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import { api } from '../axios/api';

export type User = {
  id: string;
  name: string;
  email: string;
  // eslint-disable-next-line camelcase
  created_at: string;
};

type GetUsersResponse = { users: User[]; totalCount: number };

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data: dataResponse, headers } = await api('users', {
    params: {
      page,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = dataResponse.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number, options?: UseQueryOptions) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 min
    ...options,
  }) as UseQueryResult<GetUsersResponse, unknown>;
}
