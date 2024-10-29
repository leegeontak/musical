import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./componentStyle/ShowMusicalStyle.module.css";

const ShowMusical = ({ kopisMusical }) => {
    kopisMusical ? console.log(kopisMusical) : console.log("no");

    return (
        <div className={styles.mainContainer}>
            <h1>현재 상영중인 뮤지컬</h1>
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

export default ShowMusical;
