import type {NextPage} from 'next'
import styles from '../styles/Temp.module.scss'
import Footer from "../src/component/common/Footer";
import {IHeaderProps} from "../src/type/type";
import SetHead from "../src/component/common/Head";
import {tokenCheck} from "../src/api/member";
import {AxiosResponse} from "axios";

const Temp: NextPage = () => {
    const headerProps: IHeaderProps = {
        title: 'Temp'
    }

    const deleteTokenCode = () => {
        localStorage.removeItem('token-code');
    }

    const testTokenCode = async () => {
        const result: AxiosResponse | undefined = await tokenCheck();

        console.log(result?.data)
    }

    return (
        <div className={styles.container}>
            <SetHead {...headerProps}/>

            <main className={styles.main}>
                <button onClick={deleteTokenCode}>delete token</button>
                <button onClick={testTokenCode}>token check</button>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default Temp
