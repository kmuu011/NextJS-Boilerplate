import {FunctionComponent} from "react";
import styles from "../../../styles/common/Common.module.scss";
import Image from "next/image";
import logoImage from "../../../public/violet.png";

const Footer: FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://github.com/kmuu011/NextJS_Boilerplate"
                target="_blank"
                rel="noopener noreferrer"
            >
                Made by {' '}
                <span className={styles.logo}>
                    <Image src={logoImage} alt="Violet Logo" width={"44"} height={"44"}/>
                </span>
            </a>
        </footer>
    )
}

export default Footer
