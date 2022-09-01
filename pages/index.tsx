import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import Header from "../src/component/common/header";
import Footer from "../src/component/common/footer";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header/>

            <Footer/>
        </div>
    )
}

export default Home
