"use client";

import { useEffect } from "react";
import useSWR from 'swr';
import { User } from '@/models/user';
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/auth-slice";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const token =
    typeof window === 'undefined' ? null : localStorage.getItem('accessToken');
  const { data, error } = useSWR<User>(token ? '/auth/profile' : null);

  useEffect(() => {
    if (!token) {
      dispatch(setUser(null));
      return;
    }
    if (data) dispatch(setUser(data));
    else if (error) dispatch(setUser(null));
  }, [data, dispatch, error, token]);

  return <>{children}</>;
}
