export interface User {
    email: string;
    names: string;
    last_names: string;
    password: string;
    genre: string;
    age: string;
}

export interface Product {
    title: string;
    price: number;
    image: string;
    positive_comments: number;
    negative_comments: number;
    neutral_comments: number;
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


export interface SearchArctions {
    setSearch: (search: string) => void;
    fetchSearch: (search: string) => void;
    setProductList: (productList: Product[]) => void;
    resetProductList: () => void;
}

export interface Search {
    search: string;
    productList: Product[];
    loading: boolean;
}