import styles from '../../../../styles/common/sideBar/SideBar.module.scss';
import {BaseSyntheticEvent, FunctionComponent, useEffect, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {orRegExpMaker} from "../../../utils/utils";
import {useRecoilState} from "recoil";
import {showSideBarAtom} from "../../../recoil/atoms/common";
import SideMenu from "./SideMenu";

const GlobalNavigation: FunctionComponent = () => {
    const [showSideBar, setShowSideBar] = useRecoilState(showSideBarAtom);

    const menuList = [
        {
            title: '설정',
            children: [
                {title: '로그아웃'}
            ]
        },
        {
            title: '설정',
            children: [
                {title: '로그아웃'},
                {title: '로그아웃'},
                {title: '로그아웃'},
            ]
        }
    ];

    return (
        <div className={showSideBar ? styles.enableContainer : styles.disableContainer}
             id={"naviMenuContainer"}
             onClick={(e) => {
                 const element: HTMLDivElement = e.target as HTMLDivElement;

                 if (element.id === 'naviMenuContainer') {
                     setShowSideBar(false);
                 }
             }}>
            <div className={styles.menuWrap}>
                {menuList.map((menu, i) => {
                    return <SideMenu
                        title={menu.title}
                        children={menu.children}
                        key={i}
                    />
                })}
            </div>
        </div>
    )
}

export default GlobalNavigation;
