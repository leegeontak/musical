import { useState } from "react";
import styles from "./componentStyle/HeaderComponentStyle.module.css";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
    const [searchData, setSearchData] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // e.preventDefalut();
        e.preventDefault();
        navigate("/searchResult", { state: { searchData } });
    };
    return (
        <header>
            {/* <section className={styles.fixedHeader}></section> */}
            <div className={styles.headerContainer}>
                <h1
                    className="logo"
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                >
                    LOGO
                </h1>
                <div className={styles.searchContainer}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={searchData}
                            className={styles.search}
                            placeholder="검색어를 입력해주세요"
                            onChange={(e) => setSearchData(e.target.value)}
                        ></input>
                        <img src="/images/search.png"></img>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
