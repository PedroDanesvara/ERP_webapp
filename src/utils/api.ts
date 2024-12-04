const BASE_URL = 'http://localhost:9000/api/v1';

export const useAPI = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: object,
  withAuth: boolean = true
) => {
  //TODO: add auth logic
}