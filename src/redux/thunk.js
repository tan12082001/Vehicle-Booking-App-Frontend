import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const setAuthenticationToken = ({ headers }) => localStorage.setItem('token', headers.get('Authorization'));
const removeAuthenticationToken = () => localStorage.removeItem('token');

export const userSignUp = createAsyncThunk(
  'users/signup',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/users/sign_up`, user, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      setAuthenticationToken(response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const userLogin = createAsyncThunk(
  'users/login',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/users/sign_in`, user);

      setAuthenticationToken(response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const userLogout = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseURL}/logout`);

      removeAuthenticationToken();

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/users`);

      setAuthenticationToken(response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
