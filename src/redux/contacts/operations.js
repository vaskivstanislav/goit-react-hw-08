import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра
  async (_, thunkAPI) => {
    try {
      const response = await goitApi.get('/contacts');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
  try {
    const response = await goitApi.post('contacts', body);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await goitApi.delete(`/contacts/${id}`);
    return id;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});