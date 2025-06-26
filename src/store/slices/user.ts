import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  role: "admin" | "staff" | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  tokenVerified: boolean;
}

const initialState: UserState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  role: null,
  isAuthenticated: false,
  isLoading: true,
  tokenVerified: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<UserState, "isAuthenticated" | "isLoading">>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.tokenVerified = true;
    },

    clearUser: (state) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.role = null;
      state.isLoading = false;
      state.tokenVerified = true;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTokenVerified: (state, action: PayloadAction<boolean>) => {
      state.tokenVerified = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading, setTokenVerified } = userSlice.actions;
export default userSlice.reducer;
