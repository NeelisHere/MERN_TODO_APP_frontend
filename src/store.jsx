import { create } from 'zustand'

export const useStore = create((set) => ({
  isAuthenticated: false,
  loading: false,
  user:{},
  setAuthStatus: (status) => set((state) => ({ ...state, isAuthenticated: status })),
  setLoading: (status) => set((state) => ({ ...state, loading: status })),
  setUser: (user) => set((state) => {
    console.log(user)
    return { ...state, user}
  })
}))