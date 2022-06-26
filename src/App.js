// import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Board from "./components/Board";
import SearchBar from "./components/SearchBar";

function App() {
  const API =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=b5c544dcc6b7a3ce75cf12fcb02c4268&language=en-US";

  const [getData, setGetData] = useState([]);
  const [getTrend, setGetTrend] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      await fetch(API)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.results);
          setGetData(data.results);
        });
    };

    const getTrendApi = async () => {
      await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=b5c544dcc6b7a3ce75cf12fcb02c4268"
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.results);
          setGetTrend(data.results);
        });
    };
    getApi();
    getTrendApi();
  }, []);



  return (
    <div>
      <Header />
      <h1>trending movie</h1>
      <SearchBar />
      <h1>trending movie</h1>
      <Board data={getTrend} />
      <h1>upcoming movie</h1>
      <Board data={getData} />
    </div>
  );
}

export default App;

//  <Header>
// <Routes>
//   <Route exact path="/" element={<Board data={getData} />}>
//     <h1>upcoming movie</h1>
//   </Route>
//   <Route path="/new" element={<Home />}></Route>
//   <Route path="/fav"></Route>
// </Routes>
// </Header>
