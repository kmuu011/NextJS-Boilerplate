import styles from '../../../../styles/common/sideBar/SideBar.module.scss';
import {FunctionComponent, useEffect} from "react";
import {useRecoilState} from "recoil";
import {showSideBarAtom} from "../../../recoil/atoms/common";
import SideMenu from "./SideMenu";
import {logout} from "../../../api/member";
import {SideMenuProps} from "../../../type/type";

const GlobalNavigation: FunctionComponent = () => {
    const [showSideBar, setShowSideBar] = useRecoilState(showSideBarAtom);

    const menuList: SideMenuProps[] = [
        {
            title: '할일 목록',
            children: [
                {title: '목록 보기', url: '/todoGroup'}
            ]
        },
        {
            title: '설정',
            children: [
                {title: '로그아웃', action: logout},
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
