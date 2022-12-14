import { getDocs } from "firebase/firestore";

export const getAll = (query) => {
    return getDocs(query);
}

export const getOne = (query) => {
    return getDocs(query);
}