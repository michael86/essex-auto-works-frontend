import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  role: "admin" | "staff" | null;
  emailVerified: number;
  isAuthenticated: boolean;
  isLoading: boolean;
  tokenVerified: boolean;
}

const initialState: UserState = {
  email: null,
  firstName: null,
  lastName: null,
  role: null,
  emailVerified: 0,
  isAuthenticated: false,
  isLoading: false,
  tokenVerified: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<Omit<UserState, "isAuthenticated" | "isLoading" | "tokenVerified">>
    ) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.role = action.payload.role;
      state.emailVerified = action.payload.emailVerified;
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
