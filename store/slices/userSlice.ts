import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  theme: string;
}

const initialState: UserState = {
  theme: 'dark',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTheme: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.theme>
      ) => {
      console.log(action.payload);
      state.theme = action.payload;
    },
  },
});

export const getUserState = (state: { user: UserState }) => state.user;

export const { setTheme } = userSlice.actions;

export default userSlice.reducer;