import {FunctionComponent} from "react";
import {SideSubMenuProps} from "../../../type/props";
import Link from "next/link";
import {menuIcon, menuItem, menuTitle} from "../../../../styles/common/sideBar/SideBar.style";

const getSubMenu = (title: string, action?: Function, path?: string) => {

    return <div
        className={menuItem(true, path)}
        onClick={action ? () => action() : undefined}
    >
        <div className={menuIcon}/>
        <div className={menuTitle}>
            {title}
        </div>
    </div>
}

const SideSubMenu: FunctionComponent<SideSubMenuProps> = (
    {
        title,
        action,
        url
    }
) => {
    if (url) {
        return <Link href={url}>
            {getSubMenu(title, action, url)}
        </Link>
    } else if (action) {
        return getSubMenu(title, action, url);
    } else {
        return getSubMenu(title, undefined, url);
    }
}

export default SideSubMenu;
