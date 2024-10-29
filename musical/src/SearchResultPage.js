import { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import axios from "axios";
import styles from "./componentStyle/ShowMusicalStyle.module.css";
import { Link, useLocation } from "react-router-dom";

const SearchResultPage = () => {
    const location = useLocation();
    const [kopisMusical, setKopisMusical] = useState("");
    const { searchData } = location.state || {};
    useEffect(() => {
        if (searchData) {
            axios
                .post("/search", { searchData })
                .then((response) => setKopisMusical(response.data.dbs.db))
                .catch((error) => {
                    console.error("서버 요청 오류:", error);
                });
        }
    }, [searchData]);

    return (
        <div className={styles.mainContainer} style={{ marginTop: "150px" }}>
            <h1>"{searchData}"에 대한 검색 결과입니다!</h1>
            <section className={styles.musicalContainer}>
                {kopisMusical
                    ? kopisMusical.map((data, idx) => (
                          <Link
                              to={`/detail/${data.mt20id}`} // DetailMusical 컴포넌트로 이동
                              key={idx}
                              className={styles.tiketItem}
                              state={data}
                              style={{ textDecoration: "none", color: "black" }}
                          >
                              <div>
                                  <img
                                      src={data.poster}
                                      className={styles.musicalImg}
                                      alt={data.prfnm}
                                  />
                                  <h3 className={styles.musicalName}>
                                      {data.prfnm}
                                  </h3>
                                  <h5 className={styles.musicalDate}>
                                      {data.prfpdfrom}~{data.prfpdto}
                                  </h5>
                              </div>
                          </Link>
                      ))
                    : null}
            </section>
        </div>
    );
};

export default SearchResultPage;
