import { useState } from "react";

const Cards = ({ name, img, statistics }) => {
  // State
  const [statsClicked, setStatsClicked] = useState(false);
  return (
    // Display either images or statistics
    <div className="card" style={{ width: "17rem" }}>
      {statsClicked ? (
        <ul onClick={() => setStatsClicked(!statsClicked)}>
          {statistics.map((stat, listKey) => {
            return <li key={listKey}>🏀 {stat}</li>;
          })}
        </ul>
      ) : (
        <img
          src={img}
          className="card-img-top"
          onClick={() => setStatsClicked(!statsClicked)}
        />
      )}

      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
};

export default Cards;
