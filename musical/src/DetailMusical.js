import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./componentStyle/DetailMusicalStyle.module.css";
import { useState, useEffect } from "react";
// import { response } from "express";
const DetailMusical = () => {
    const mt20id = useParams();
    const location = useLocation().state;
    const [musicalID, setMusicalID] = useState(mt20id.id);
    console.log(location);
    console.log(mt20id.id);
    useEffect(() => {
        if (musicalID) {
            axios
                .post("/detail", { musicalID })
                .then((response) => setMusicalID(response.data[0]))
                .catch((error) => {
                    console.error("서버 요청 오류:", error);
                });
        }
    }, []);
    setTimeout(console.log(musicalID), 1000);
    musicalID ? console.log(musicalID) : console.log("no");
    return (
        <div className={styles.mainContainer}>
            <section className={styles.detailMusicalContainer}>
                <div className={styles.musicalInfoContainer}>
                    <div className={styles.imgbox}>
                        <img src={location.poster} alt={location.prfnm}></img>
                    </div>
                    <div className={styles.info}>
                        <h1 className={styles.musicalName}>{location.prfnm}</h1>
                        <h3>장소: {musicalID.fcltynm}</h3>
                        <h3>러닝타임: 1시간 30분</h3>
                        <h3>기간: 2016.05.12 ~ 2016.12.31</h3>
                        <h3>관람연령: 만 12세 이상</h3>
                        <h3>하이퍼링크</h3>
                    </div>
                </div>
                <div className={styles.soundBar}>
                    <div>ost 제목</div>
                    <button>재생</button>
                </div>
                <div className={styles.introImg}>
                    <img src="http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF132236_160704_0226303.jpg"></img>
                    <img src="http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF132236_160704_0226302.jpg"></img>
                </div>
            </section>
        </div>
    );
};

export default DetailMusical;
