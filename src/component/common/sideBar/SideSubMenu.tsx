import {FunctionComponent, useEffect, useState} from "react";
import {SideSubMenuProps} from "../../../type/props";
import Link from "next/link";
import {menuIcon, menuItem, menuTitle} from "../../../../styles/common/sideBar/SideBar.style";

const getSubMenu = (title: string, action?: Function, isActive?: boolean) => {
    isActive = isActive || false;

    return <div
        className={menuItem(true, isActive)}
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
        url,
        path
    }
) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const pathName: string = window.location.pathname;

        setIsActive(pathName === (path || '') + url);
    }, [path]);

    if (url) {
        return <Link href={url}>
            {getSubMenu(title, action, isActive)}
        </Link>
    } else if (action) {
        return getSubMenu(title, action, isActive);
    } else {
        return getSubMenu(title, undefined, isActive);
    }
}

export default SideSubMenu;
