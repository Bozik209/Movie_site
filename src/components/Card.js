import "../style/Card.css";

const Card = ({ backImage, title, overview, popularity, vote }) => {
  const clicked = (a) => {
    console.log('click: ',a.target);
  };
  return (
    <div onClick={clicked}>
      <div className="card">
        <div
          className="img1"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backImage})`,
          }}
        ></div>
        <div
          className="img2"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backImage})`,
          }}
        ></div>
        <div className="title">{title}</div>
        <div className="text">{overview}</div>
        <a href="#/">
          <div
            className="vote"
            style={vote > 6 ? { background: "green" } : { background: "red" }}
          >
            {vote} <i className="fas fa-film"></i>
          </div>
        </a>
        <a href="#/">
          <div className="views">
            {popularity} <i className="far fa-eye"></i>{" "}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
