import {atom} from "recoil";
import {createKey} from "../../const/function";

const getKey = (key: string) => {
    return key + createKey();
}

export const showSideBarAtom = atom({
    key: getKey('showSideBar'),
    default: false
});

