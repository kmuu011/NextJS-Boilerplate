import styles from '../../../../styles/common/navigation/NavigationMenu.module.scss';
import {BaseSyntheticEvent, FunctionComponent, useEffect, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {orRegExpMaker} from "../../../utils/utils";
import {useRecoilState} from "recoil";
import {showSideMenuAtom} from "../../../recoil/atoms/common";

const GlobalNavigation: FunctionComponent = () => {
    const [showSideMenu, setShowSideMenu] = useRecoilState(showSideMenuAtom);

    const menuGroupToggle = (e: BaseSyntheticEvent) => {
        const parentNode = e.currentTarget.parentNode;
        const isOpened = parentNode.className
            .indexOf('Opened') === -1;
        parentNode.className = isOpened
            ? styles.menuGroupOpened : styles.menuGroupClosed;
    }

    return (
        <div className={showSideMenu ? styles.enableContainer : styles.disableContainer}
             id={"naviMenuContainer"}
             onClick={(e) => {
                 const element: HTMLDivElement = e.target as HTMLDivElement;

                 if (element.id === 'naviMenuContainer') {
                     setShowSideMenu(false);
                 }
             }}>
            <div>

            </div>
            <ul className={styles.menuWrap}>
                <li className={styles.menuGroupClosed}>
                    <div className={styles.menuItem}
                         onClick={(e: BaseSyntheticEvent) => {
                             menuGroupToggle(e)
                         }}
                    >
                        <span className={styles.menuIcon}>O</span>
                        <span className={styles.menuTitle}>설정</span>
                        <i/>
                    </div>
                    <ul>
                        <li className={styles.menuSubItem}>
                            <span className={styles.menuIcon}></span>
                            <span className={styles.menuTitle}>로그아웃</span>
                        </li>
                    </ul>
                </li>
                <li className={styles.menuGroupClosed}>
                    <div className={styles.menuItem}
                         onClick={(e: BaseSyntheticEvent) => {
                             menuGroupToggle(e)
                         }}
                    >
                        <span className={styles.menuIcon}>O</span>
                        <span className={styles.menuTitle}>설정</span>
                        <i/>
                    </div>
                    <ul>
                        <li className={styles.menuSubItem}>
                            <span className={styles.menuIcon}></span>
                            <span className={styles.menuTitle}>로그아웃</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default GlobalNavigation;
