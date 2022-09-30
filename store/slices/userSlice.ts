import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  theme: string;
  loading: boolean;
}

const initialState: UserState = {
  theme: 'dark',
  loading: true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTheme: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.theme>
      ) => {
      state.theme = action.payload;
    },
    setLoading: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.loading>
      ) => {
      state.loading = action.payload;
    },
  },
});

export const getUserState = (state: { user: UserState }) => state.user;

export const { setTheme, setLoading } = userSlice.actions;

export default userSlice.reducer;