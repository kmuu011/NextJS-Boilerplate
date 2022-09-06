import {atom} from "recoil";
import {createKey} from "../../const/function";

export const showSideBarAtom = atom({
    key: 'showSideBar' + createKey(),
    default: false
});

