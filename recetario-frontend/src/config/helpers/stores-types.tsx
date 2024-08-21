export interface User {
    email: string;
    names: string;
    last_names: string;
    password: string;
    genre: string;
    age: string;
}

export interface UserActions {
    setEmail: (email: string) => void;
    setName: (name: string) => void;
    setLastName: (lastName: string) => void;
    setPassword: (password: string) => void;
    setGenre: (genre: string) => void;
    setAge: (age: string) => void;
    fetchSignUpUser: (user: User) => void;
    clearUser: () => void;
    fetchLoginUser: (user: string, password: string) => void;
}