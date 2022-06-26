import Card from "./Card";
import "../style/Board.css";

const Board = (props) => {
  const clicked1=(a)=>{
    console.log('click: ',a.target);
  }
  return (
    <div className="board" onClick={clicked1}>

      {props.data.map((movieCard) => {
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
      })}
    </div>
  );
};

export default Board;
