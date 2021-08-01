import { useQuery, UseQueryResult } from 'react-query';
import { useRestClient } from 'src/app/state/context/RestClientProvider';

export const useExamples = (): UseQueryResult => {
  const makeApiCall = useRestClient();

  return useQuery('examples', async () => {
      const { data } = await makeApiCall({});

      return data;
  });
};
