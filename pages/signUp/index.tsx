import type {NextPage} from 'next'
import styles from '../../styles/SignUp.module.scss'
import Footer from "../../src/component/common/Footer";
import {
    BaseSyntheticEvent, FormEventHandler, useCallback,
    useRef,
    useState
} from "react";
import SetHead from "../../src/component/common/Head";
import {duplicateCheckApi, signUpApi} from "../../src/api/member";
import {AxiosResponse} from "axios";
import _ from "lodash";

const rules = {
    id: /^[0-9a-zA-Z]*$/i,
    nickname: /^[0-9a-zA-Z가-힣]*$/i,
    email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
}

const Index: NextPage = () => {
    const debounceHandler = useCallback(
        _.debounce(async (id: string, e: HTMLInputElement) => {
            await duplicateCheckApi({type: Object.keys(rules).indexOf(id), value: e.value})

        },400), []
    );

    const typingCheck = (e: BaseSyntheticEvent) => {
        e.persist();

        const id = e.target.id;

        debounceHandler(id, e.target)
    }

    const signUp: FormEventHandler = async (e: BaseSyntheticEvent): Promise<void> => {
        e.preventDefault();

        const divList: Element[] = e.target.children;
        const inputList: Element[] = [];

        for(const div of divList){
            if(div.children[0].tagName !== 'INPUT') continue;
            inputList.push(div.children[0]);
        }


        for(const d of inputList){
            console.log(d)
        }
    };


    return (
        <div className={styles.container}>
            <SetHead/>

            <div className={styles.title}>할일 목록</div>

            <div className={styles.titleDesc}>
                로그인
            </div>

            <form onSubmit={signUp}>
                <div className={styles.idDiv}>
                    <input type="text" id="id" placeholder="아이디"
                           onChange={(e) => typingCheck(e)} />
                </div>

                <div className={styles.idDiv}>
                    <input type="text" id="nickname" placeholder="닉네임"
                           onChange={(e) => typingCheck(e)} />
                </div>

                <div className={styles.idDiv}>
                    <input type="text" id="email" placeholder="이메일"
                           onChange={(e) => typingCheck(e)} />
                </div>

                <div className={styles.passwordDiv}>
                    <input type="password" id="password" placeholder="비밀번호" />
                </div>

                <div className={styles.passwordDiv}>
                    <input type="password" id="passwordCheck" placeholder="비밀번호 확인"/>
                </div>

                <div className={styles.buttonDiv}>
                    <button>회원가입</button>
                </div>
            </form>

            <div className={styles.buttonDiv}>
                <button>메인으로</button>
            </div>

            <Footer/>
        </div>
    )
}

export default Index
