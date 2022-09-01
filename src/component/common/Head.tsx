import Head from 'next/head'
import {iHeaderProps} from "../../type/type";
import {FunctionComponent} from "react";

const SetHead: FunctionComponent<iHeaderProps> = (props?: iHeaderProps) => {
    const title:string = props?.title || 'NextJS Boilerplate'
    const description: string = props?.description || 'NextJS 보일러 플레이트 입니다.'

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}

export default SetHead
