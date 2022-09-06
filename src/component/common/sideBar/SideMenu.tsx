import styles from '../../../../styles/common/sideBar/SideBar.module.scss';
import {FunctionComponent, useState} from "react";
import {SideMenuProps} from "../../../type/type";
import SideSubMenu from "./SideSubMenu";
import Image from "next/image";
import arrowImage from "../../../../public/static/button/arrow/expand_more.svg";
import {css} from "@emotion/css";

const SideMenu: FunctionComponent<SideMenuProps> = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(true);

    const subMenuWrap = css`
      overflow-y: hidden;
      height: ${isOpen ? children.length*45 : 0}px;
      transition: height .3s cubic-bezier(.645, .045, .355, 1), transform .3s cubic-bezier(.645, .045, .355, 1), top .3s cubic-bezier(.645, .045, .355, 1), color .3s cubic-bezier(.645, .045, .355, 1);
    `;

    return (
        <div className={isOpen ? styles.menuGroupOpened : styles.menuGroupClosed}>
            <div
                className={styles.menuItem}
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                <div className={styles.menuIcon}>

                </div>
                <div className={styles.menuTitle}>
                    {title}
                </div>
                <div className={styles.menuArrow}>
                    <Image src={arrowImage}/>
                </div>
            </div>
            <div className={subMenuWrap}>
                {children.map((subMenu, i) => {
                    return <SideSubMenu title={subMenu.title} key={i}/>
                })}
            </div>
        </div>
    )
}

export default SideMenu;