"use client";

import { signinApi, signupApi } from "@/services/authService";
import { useRouter } from "next/navigation";

const { useContext, useReducer } = require("react");

const AuthContext = useContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "signin":
      return { isAuthenticated: true, user: action.payload };
  }
};

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  const router = useRouter();

  async function signin(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      toast.error(errorMsg);
      dispatch({ type: "rejected", payload: errorMsg });
    }
  }
  async function signup(values) {
    dispatch({ type: "loading" });
    try {
      const { message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }

  return (
    <AuthContext.provider
      value={{ user, isAuthenticated, isLoading, signin, signup }}
    >
      {children}
    </AuthContext.provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found Auth Context");
  return context;
}
