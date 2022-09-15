import {atom} from "recoil";
import {getAtomKey} from "../../utils/recoil";

export const showProfileImageModal = atom({
    key: getAtomKey('showProfileImageModal'),
    default: false
});

