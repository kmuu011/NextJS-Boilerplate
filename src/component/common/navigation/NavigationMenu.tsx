import styles from '../../../../styles/common/navigation/NavigationMenu.module.scss';
import {FunctionComponent, useEffect, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {orRegExpMaker} from "../../../utils/utils";
import {useRecoilState} from "recoil";
import {showSideMenuAtom} from "../../../recoil/atoms/common";

const GlobalNavigation: FunctionComponent = () => {
    const [showSideMenu, setShowSideMenu] = useRecoilState(showSideMenuAtom);

    const testRef = useRef<HTMLDivElement>(null);

    return (
            <div className={showSideMenu ? styles.enableContainer : styles.disableContainer}
                 id={"naviMenuContainer"}
                 onClick={(e) => {
                     const element: HTMLDivElement = e.target as HTMLDivElement;

                     if(element.id === 'naviMenuContainer'){
                         setShowSideMenu(false);
                     }
                 }}>
                <div className={styles.menuWrap}
                     ref={testRef}
                >
                    <div
                        onClick={() => {
                        }}>test</div>
                    <div>test</div>
                    <div>test</div>
                </div>
            </div>
    )
}

export default GlobalNavigation;
