import styles from '../../../../styles/common/navigation/GlobalNavigation.module.scss';
import {FunctionComponent, useEffect, useState} from "react";
import menuButton from "../../../../public/static/button/menu/menu.svg"
import Image from "next/image";
import {orRegExpMaker} from "../../../utils/utils";
import {useRecoilState} from "recoil";
import {showSideMenuAtom} from "../../../recoil/atoms/common";

const disabledLocationList: string[] = [
    '/', 'signUp'
];

const GlobalNavigation: FunctionComponent = () => {
    const [showNavi, setShowNavi] = useState(false);
    const [showSideMenu, setShowSideMenu] = useRecoilState(showSideMenuAtom);

    useEffect(() => {
        const pathName: string = window.location.pathname;

        setShowNavi(!orRegExpMaker(disabledLocationList).test(pathName));
    }, []);

    return showNavi ? <div className={styles.container}>
            <Image onClick={() => setShowSideMenu(!showSideMenu)}
                   src={menuButton}
                   alt={"메뉴버튼"}
                   width={"35"} height={"35"}
            />
        </div> : <></>
}

export default GlobalNavigation;
