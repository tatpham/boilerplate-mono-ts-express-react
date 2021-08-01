import {
  RestClientResponse,
  RestClientT,
} from 'src/app/state/context/RestClientProvider';

import config from 'src/config';

const ENDPOINT = 'example';

export const fetchExample = (client: RestClientT): RestClientResponse => {
  return client({
    method: 'GET',
    url: `${config.baseUrl}/${ENDPOINT}`,
  });
};
