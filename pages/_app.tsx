import '../styles/globals.scss';
import '../public/static/font/NanumSquareRound/style.scss';
import type {AppProps} from 'next/app';
import {Fragment, useEffect} from "react";
import Footer from "../src/component/common/Footer";
import GlobalNavigation from "../src/component/common/GlobalNavigation";

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        const pathName: string = window.location.pathname;
        const tokenCode: string | null = localStorage.getItem('token-code');

        if (tokenCode) {
            if (pathName === '/') {
                window.location.href = '/temp';
            }
        }
    }, []);

    return (
        <Fragment>
            <GlobalNavigation/>
            <Component {...pageProps}/>
            <Footer/>
        </Fragment>
    )
}

export default MyApp
