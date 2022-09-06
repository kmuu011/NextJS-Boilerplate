import styles from '../../../../styles/common/sideBar/SideBar.module.scss';
import {FunctionComponent} from "react";
import {SideSubMenuProps} from "../../../type/type";

const SideSubMenu: FunctionComponent<SideSubMenuProps> = ({title}) => {
    return (
        <div
            className={styles.menuSubItem}
        >
            <div className={styles.menuIcon}/>
            <div className={styles.menuTitle}>
                {title}
            </div>
        </div>
    )
}

export default SideSubMenu;
