import {createKey} from "../const/function";

export const getAtomKey = (key: string) => {
    return key + createKey();
}