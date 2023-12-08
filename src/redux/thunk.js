import axios from 'axios';

const baseURL = 'http://localhost:4000/api';

const setAuthenticationToken = ({ headers }) => localStorage.setItem('token', headers.get('Authorization'));
const removeAuthenticationToken = () => localStorage.removeItem('token');

const handleResponse = async (response) => {
  const { status, data } = response;

  if (status === 200 || status === 201) {
    return { data, status: 'succeeded' };
  }

  if (status === 401 || status === 500) {
    removeAuthenticationToken();
    return { status: 'expired', error: 'Unauthorized', message: 'Session has expired' };
  }

  return { status: 'failed', error: 'Request failed', message: data.message };
};

const apiEndpoints = {
  register: async (user) => {
    try {
      const response = await axios.post(`${baseURL}/users`, { user });

      const { data, status, error, message } = await handleResponse(response);

      if (status === 'succeeded') {
        setAuthenticationToken(data.token);
      }

      return { data, status, error, message };
    } catch (error) {
      return { status: 'failed', error: 'Request failed', message: error.message };
    }
  },

  login: async (user) => {
    try {
      const response = await axios.post(`${baseURL}/users/sign_in`, { user });

      const { data, status, error, message } = await handleResponse(response);

      if (status === 'succeeded') {
        setAuthenticationToken(data.token);
      }

      return { data, status, error, message };
    } catch (error) {
      return { status: 'failed', error: 'Request failed', message: error.message };
    }
  },

  logout: async () => {
    try {
      const response = await axios.delete(`${baseURL}/users`, {
        headers: { Authorization: localStorage.getItem('token') },
      });

      const { status, message } = await handleResponse(response);

      if (status === 'succeeded') {
        removeAuthenticationToken();
      }

      return { status, message };
    } catch (error) {
      return { status: 'failed', error: 'Request failed', message: error.message };
    }
  },
  newReserve: async (carId, reservationData) => {
    try {
      const response = await axios.post(`${baseURL}/car/${carId}/new_reserve`, reservationData);
      return await handleResponse(response);
    } catch (error) {
      return { status: 'failed', error: 'Request failed', message: error.message };
    }
  },
};

export default apiEndpoints;
