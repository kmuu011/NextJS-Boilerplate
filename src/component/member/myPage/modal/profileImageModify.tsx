import {FunctionComponent, useEffect, useState} from "react";
import * as styles from "../../../../../styles/member/MyPageProfileImageModal.style";
import {useRecoilState} from "recoil";
import {showProfileImageModal} from "../../../../recoil/atoms/member";
import Image, {StaticImageData} from "next/image";
import noImage from "../../../../../public/violet.png";
import {deleteProfileImageApi, updateProfileImageApi} from "../../../../api/member";
import {hostDomain} from "../../../../config";
import {ProfileImageModalProps} from "../../../../type/props";
import {AxiosResponse} from "axios";

const ProfileImageModifyModal: FunctionComponent<ProfileImageModalProps> = (
    {
        reloadMemberInfo,
        profileImageKey
    }
) => {
    const [showProfileModal, setShowProfileModal] = useRecoilState(showProfileImageModal);
    const [image, setImage] = useState<string>();
    const [imageSrc, setImageSrc]
        = useState<string | StaticImageData>(noImage);

    useEffect(() => {
        if(profileImageKey){
            setImageSrc(hostDomain + profileImageKey);
        }
    }, [profileImageKey]);

    useEffect(() => {
        if (showProfileModal) {
            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                overflow-y: scroll;
                width: 100%;
                `;
        } else {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }
    }, [showProfileModal]);

    const loadImage = (image: any): void => {
        if (image.length === 0) {
            setImageSrc(noImage)
            return;
        }
        setImageSrc(URL.createObjectURL(image[0]));
        setImage(image[0]);
    }

    const updateProfileImage = async (): Promise<void> => {
        const payload = new FormData();

        if (image === undefined) {
            alert('이미지를 업로드해주세요.');
            return;
        }

        payload.append('file', image);

        const response: AxiosResponse | undefined = await updateProfileImageApi(payload);

        if (response?.status !== 200) {
            alert(response?.data.message);
            return;
        }

        await reloadMemberInfo();
        setShowProfileModal(false);
    }

    const deleteProfileImage = async (): Promise<void> => {
        const response = await deleteProfileImageApi();

        if (response?.status !== 200) {
            alert(response?.data.message);
            return;
        }

        await reloadMemberInfo();
        setShowProfileModal(false);
    }

    return (
        <div
            className={styles.container(showProfileModal)}
            id="container"
            onClick={(e) => {
                const element: HTMLDivElement = e.target as HTMLDivElement;

                if (element.id === 'container') {
                    setShowProfileModal(false);
                }
            }}
        >
            <div className={styles.profileImageModifyModal}>
                <div className={styles.profileImageBorder}>
                    <Image
                        src={imageSrc}
                        width={180}
                        height={180}
                        alt="프로필 파일 이미지"
                    />
                </div>

                <div className={styles.inputWarp}>
                    <input type="file"
                           id={"img"}
                           onChange={(e) => loadImage(e.target.files)}
                    />
                </div>

                <div className={styles.buttonWrap}>
                    <button onClick={() => updateProfileImage()}>수정하기</button>
                    <button onClick={() => setShowProfileModal(false)}>취소</button>
                    <button onClick={() => deleteProfileImage()}>이미지 삭제</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileImageModifyModal
