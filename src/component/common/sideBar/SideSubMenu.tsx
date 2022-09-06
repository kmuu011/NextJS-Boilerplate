import styles from '../../../../styles/common/sideBar/SideBar.module.scss';
import {FunctionComponent} from "react";
import {SideSubMenuProps} from "../../../type/type";
import Link from "next/link";

const getSubMenu = (title: string, action?: Function) => {
    return <div
        className={styles.menuSubItem}
        onClick={action ? () => action() : undefined}
    >
        <div className={styles.menuIcon}/>
        <div className={styles.menuTitle}>
            {title}
        </div>
    </div>
}

const SideSubMenu: FunctionComponent<SideSubMenuProps>
    = ({
           title,
           action,
           url
       }) => {

    if (url) {
        return <Link href={url}>
            {getSubMenu(title, action)}
        </Link>
    } else if (action) {
        return getSubMenu(title, action);
    }else{
        return getSubMenu(title);
    }
}

export default SideSubMenu;
