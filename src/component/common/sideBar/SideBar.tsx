import styles from '../../../../styles/common/sideBar/SideBar.module.scss';
import {FunctionComponent} from "react";
import {useRecoilState} from "recoil";
import {showSideBarAtom} from "../../../recoil/atoms/common";
import SideMenu from "./SideMenu";
import {logout} from "../../../api/member";
import {SideMenuProps} from "../../../type/props";

import settingsImage from "../../../../public/static/button/setting/settings.svg";
import todoImage from "../../../../public/static/button/todo/list.svg";
import {hideSideMenuBar} from "../../../const/function";

const GlobalNavigation: FunctionComponent = () => {
    const [showSideBar, setShowSideBar] = useRecoilState(showSideBarAtom);

    const menuList: SideMenuProps[] = [
        {
            image: todoImage,
            title: '할일',
            children: [
                {title: '목록 보기', url: '/todoGroup', action: () => hideSideMenuBar(setShowSideBar)}
            ]
        },
        {
            image: settingsImage,
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
                        image={menu.image}
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
