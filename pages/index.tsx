import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import Footer from "../src/component/common/Footer";
import {FormEventHandler, useEffect, useRef, useState} from "react";
import SetHead from "../src/component/common/Head";
import {loginApi} from "../src/api/member";

const Home: NextPage = () => {
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [keepCheck, setKeepCheck] = useState<boolean>(false);

    const idInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const login: FormEventHandler = async (e): Promise<void> => {
        e.preventDefault();

        const result = await loginApi({id, password, keepCheck});

        if (result?.status !== 200) {
            alert(result?.data.message);
            return;
        }

        localStorage.setItem('token-code', result.data.tokenCode);

        console.log('로그인 성공!');
    };

    useEffect(() => {
        console.log(localStorage.getItem('token-code'))
    }, [])

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

                <div className={styles.passwordDiv}>
                    <input ref={passwordInputRef} type="password" value={password} id="password" placeholder="비밀번호"
                           onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={styles.keepLoginDiv}>
                    <input type={"checkbox"} id={"cb"} defaultChecked={keepCheck}
                           onChange={(e) => setKeepCheck(e.target.checked)} />
                    <label htmlFor={"cb"}>
                        <div className={styles.keepLoginLabel}>
                            로그인 상태 유지
                        </div>
                    </label>
                </div>

                <div className={styles.buttonDiv}>
                    <button>로그인</button>
                </div>
            </form>

            <div className={styles.buttonDiv}>
                <button>회원가입</button>
            </div>

            <Footer/>
        </div>
    )
}

export default Home
