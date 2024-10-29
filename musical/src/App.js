import React, { useEffect, useState, useRef } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import RandomMusical from "./RandomMusical";
import ShowMusical from "./ShowMusical";
import DetailMusical from "./DetailMusical";
import SearchResultPage from "./SearchResultPage";

function App() {
    const [kopisMusical, setKopisMusical] = useState("");

    useEffect(() => {
        fetch("/api/kopis")
            .then((response) => response.json())
            .then((data) => setKopisMusical(data.dbs.db))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <BrowserRouter>
            <div className="mainContainer">
                <HeaderComponent />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <RandomMusical kopisMusical={kopisMusical} />
                                <ShowMusical kopisMusical={kopisMusical} />
                            </>
                        }
                    />
                    <Route path="/detail/:id" element={<DetailMusical />} />
                    <Route
                        path="/searchResult"
                        element={<SearchResultPage />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
