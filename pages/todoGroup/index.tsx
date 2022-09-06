import type {NextPage} from 'next';
import styles from '../../styles/Home.module.scss';
import {FormEventHandler, useEffect, useRef, useState} from "react";
import SetHead from "../../src/component/common/Head";

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <SetHead/>

        </div>
    )
}

export default Home
