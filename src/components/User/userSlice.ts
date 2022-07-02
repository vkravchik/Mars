import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string;
  email: string;
  age: number;
}

export interface UserSlice extends User {
  isLoading?: boolean;
}

const initialState: UserSlice = {
  name: '',
  email: '',
  age: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<User>) => {
      Object.assign(state, payload);
    },
  },
});

export const { login } = userSlice.actions;

export const userReducer = userSlice.reducer;
