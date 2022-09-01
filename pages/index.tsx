import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import Footer from "../src/component/common/Footer";
import {FormEventHandler, useRef, useState} from "react";
import SetHead from "../src/component/common/Head";

const Home: NextPage = () => {
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [keepCheck, setKeepCheck] = useState<boolean>(false);

    const idInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const login: FormEventHandler = (e): void => {
        e.preventDefault();

        console.log(id, password, keepCheck);
    };

    return (
        <div className={styles.container}>
            <SetHead/>

            <div className={styles.title}>할일 목록</div>

            <div className={styles.titleDesc}>
                로그인
            </div>

            <form onSubmit={login}>
                <div className={styles.idDiv}>
                    <input ref={idInputRef} type="text" value={id} id="id" placeholder="아이디"
                           onChange={(e) => setId(e.target.value)} />
                </div>

                <div className="login_password">
                    <input ref={passwordInputRef} type="password" value={password} id="password" placeholder="비밀번호"
                           onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={"keep_login"}>
                    <input type={"checkbox"} id={"cb"} defaultChecked={keepCheck}
                           onChange={(e) => setKeepCheck(e.target.checked)} />
                    <label htmlFor={"cb"}>
                        <div className={"keep_login_label"}>
                            로그인 상태 유지
                        </div>
                    </label>
                </div>

                <div className="login_sign_in">
                    <button>test</button>
                </div>
            </form>

            <Footer/>
        </div>
    )
}

export default Home
