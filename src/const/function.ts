import {SetterOrUpdater} from "recoil";

export const hideSideMenuBar = (setShowSideBar: SetterOrUpdater<boolean>) => {
    setShowSideBar(false);
}