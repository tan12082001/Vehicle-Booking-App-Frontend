import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'http://localhost:4000/api';

const setAuthenticationToken = ({ headers }) => {
  const authorizationHeader = headers.get('authorization');

  if (authorizationHeader) {
    localStorage.setItem('token', authorizationHeader);
  }
};

export const getAuthenticationToken = () => localStorage.getItem('token') || false;
const removeAuthenticationToken = () => localStorage.removeItem('token');

const handleResponse = async (response) => {
  const { status, data } = response;

  // console.log('Response headers: ', headers);

  if (status === 200 || status === 201) {
    return { data, status: 'succeeded' };
  }

  if (status === 401 || status === 500) {
    removeAuthenticationToken();
    return { status: 'expired', error: 'Unauthorized', message: 'Session has expired' };
  }

  return { status: 'failed', error: 'Request failed', message: data.message };
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/users/sign_in`, { user });
      const { data, headers } = response;

      if (response.status === 200 || response.status === 201) {
        setAuthenticationToken({ headers });
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const registerUser = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    const response = await axios.post(`${baseURL}/users`, { user });
    const { data, headers } = response;

    if (response.status === 200 || response.status === 201) {
      setAuthenticationToken({ headers });
    }

    const handledResponse = await handleResponse(response);
    return { ...data, ...handledResponse };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // const token = getAuthenticationToken();
    // const authToken = token ? token.replace('Bearer ', '') : '';
    // console.log('authtoken:',authToken);

    const response = await axios.delete(`${baseURL}/users/sign_out`, {
      headers: { Authorization: localStorage.getItem('token') },
    });

    removeAuthenticationToken();
    const { status, message } = await handleResponse(response);

    return { status, message };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const postReserveCar = createAsyncThunk(
  'reservations/newReserve',
  async ({ carId, reservationData }, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${baseURL}/car/${carId}/new_reserve`, reservationData, {
        headers: {
          Authorization: token,
        },
      });
      const { data } = await handleResponse(response);

      if (response.status === 200 || response.status === 201) {
        return { data, status: 'succeeded' };
      }
      return { status: 'failed', error: 'Request failed', message: data.message };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchCarReservations = createAsyncThunk(
  'reservations/fetchCarReservations',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${baseURL}/my_reservations`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postNewCar = createAsyncThunk(
  'cars/newCar',
  async (carData, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${baseURL}/cars`, carData, {
        headers: {
          Authorization: token,
        },
      });
      console.log('Response', response);
      const { data } = await handleResponse(response);

      if (response.status === 200 || response.status === 201) {
        return { data, status: 'succeeded' };
      }
      return { status: 'failed', error: 'Request failed', message: data.message };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${baseURL}/cars`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteCar = createAsyncThunk(
  'cars/deleteCar',
  async (carId, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${baseURL}/cars/${carId}`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
