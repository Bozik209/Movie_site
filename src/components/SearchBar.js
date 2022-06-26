import React, { useEffect, useState } from "react";
import "../style/SearchBar.css";
import Card from "./Card";
import "../style/Board.css";

const SearchBar = () => {
  const [getTerm, setTerm] = useState("");
  const [getData, setData] = useState([]);

  // 👇️ disable the rule for a single line
  // eslint-disable-next-line
  const onSearchSubmit = () => {
    // e.preventDefault();
    console.log("New search submit: ", getTerm);
    getApiSearch();
  };

  const getApiSearch = async () => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b5c544dcc6b7a3ce75cf12fcb02c4268&language=en-US&query=${getTerm}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results); // data.results.map((res)=>{
        //     return console.log(res.title);
        // })
        // console.log('----------------------------------------------');
      });
  };

  useEffect(() => {
    if (getTerm !== "") {
      onSearchSubmit();
    }
  }, [getTerm, onSearchSubmit]);

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search for a movie,tv show,person...."
        onChange={(e) => setTerm(e.target.value)}
        value={getTerm}
      />
      <div className="board">
        {getData
          ? getData.map((movieCard) => {
              return (
                <Card
                  key={movieCard.id}
                  backImage={movieCard.poster_path}
                  title={movieCard.original_title}
                  overview={movieCard.overview}
                  popularity={movieCard.popularity}
                  vote={movieCard.vote_average}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default SearchBar;
