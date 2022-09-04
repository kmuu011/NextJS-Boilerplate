import styles from '../../../styles/common/GlobalNavigation.module.scss';
import {FunctionComponent, useEffect, useState} from "react";
import Link from "next/link";
import menuButton from "../../../public/static/button/menu/menu.svg"
import Image from "next/image";
import {orRegExpMaker} from "../../utils/utils";

const disabledLocationList: string[] = [
    '/', 'signUp'
];

const GlobalNavigation: FunctionComponent = () => {
    const [showNavi, setShowNavi] = useState(false);

    useEffect(() => {
        const pathName: string = window.location.pathname;

        setShowNavi(!orRegExpMaker(disabledLocationList).test(pathName));
    }, []);

    return showNavi ? <div className={styles.container}>
            <Image src={menuButton} alt={"메뉴버튼"} width={"35"} height={"35"}/>
        </div> : <></>

}

export default GlobalNavigation;
