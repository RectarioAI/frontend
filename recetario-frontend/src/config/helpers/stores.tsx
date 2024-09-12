import { create } from "zustand";
import { User, UserActions } from "./stores-types";
import axios from "axios";

export const useUser = create<User & UserActions>((set) => ({
  email: "",
  names: "",
  last_names: "",
  password: "",
  genre: "",
  age: "",
  setEmail: (email: string) => set({ email }),
  setName: (names: string) => set({ names }),
  setLastName: (last_names: string) => set({ last_names }),
  setPassword: (password: string) => set({ password }),
  setGenre: (genre: string) => set({ genre }),
  setAge: (age: string) => set({ age }),
  fetchSignUpUser: async (user: User) => {
    axios
      .post("http://localhost:8000/auth/register", {
        email: user.email,
        names: user.names,
        last_names: user.last_names,
        password: user.password,
        genre: user.genre,
        age: user.age,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  clearUser: () =>
    set({
      email: "",
      names: "",
      last_names: "",
      password: "",
      genre: "",
      age: "",
    }),
  fetchLoginUser: async (user: string, password: string) => {
    axios
      .post("http://localhost:8000/auth/login", {
        email: user,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          set({
            email: res.data.email,
            names: res.data.names,
            last_names: res.data.last_names,
            password: res.data.password,
            genre: res.data.genre,
            age: res.data.age,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
}));
