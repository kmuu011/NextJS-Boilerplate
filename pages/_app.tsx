import '../styles/globals.scss';
import '../public/static/font/NanumSquareRound/style.scss';
import type {AppProps} from 'next/app';
import {useEffect} from "react";

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

    return <Component {...pageProps} />
}

export default MyApp
