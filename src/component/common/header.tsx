import Head from 'next/head'
import {iHeaderProps} from "../../type/type";
import {FunctionComponent} from "react";

const Header: FunctionComponent<iHeaderProps> = (props?: iHeaderProps) => {
    const title = props?.title || 'NextJS Boilerplate'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="NextJS 보일러 플레이트 입니다."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
        </>
    )
}

export default Header
