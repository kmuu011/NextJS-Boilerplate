import {SetterOrUpdater} from "recoil";
const dummyStr: string = 'QWERTYUIOPASDFGHJKLZXCVBNM0123456789';

export const hideSideMenuBar = (setShowSideBar: SetterOrUpdater<boolean>): void => {
    setShowSideBar(false);
}

export const createKey = (count?: number, time?: boolean): string => {
    count = count || 20;

    let key = '';

    for (let i=0; i<count; i++) {
        const ran_int = Math.floor(Math.random() * dummyStr.length);

        key += dummyStr[ran_int];
    }

    if(time){
        key += '_' + Date.now();
    }

    return key;
};