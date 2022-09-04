import styles from '../../../styles/common/GlobalNavigation.module.scss';
import {FunctionComponent, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {AxiosResponse} from "axios";
import menuButton from "../../../public/static/button/menu/menu.svg"
import Image from "next/image";

const GlobalNavigation: FunctionComponent = () => {
    const [showNavi, setShowNavi] = useState(false);

    useEffect(() => {
        const pathName: string = window.location.pathname;
        setShowNavi(!(/^\/$|^signUp$/).test(pathName));
    }, []);

    return showNavi ? <div className={styles.container}>
            <Image src={menuButton} alt={"메뉴버튼"} width={"35"} height={"35"}/>
        </div> : <></>

}

export default GlobalNavigation;
