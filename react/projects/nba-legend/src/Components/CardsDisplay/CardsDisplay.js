import CardsStyles from "./CardsDisplay.module.scss";
import Cards from "./Cards";
import { data } from "../../assets/data.js";
import { useState } from "react";

const CardsDisplay = () => {
  // State
  let [search, setSearch] = useState("");
  let [displayData, setDisplayData] = useState(data);

  // Search for players
  const handleSearch = (e) => {
    setSearch(e.target.value);
    let filteredData = data.filter((player) => {
      return player.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setDisplayData(filteredData);
  };

  return (
    <div className={CardsStyles.container}>
      {/* Search Bar */}
      <input
        type="search"
        name=""
        id={CardsStyles["search-bar"]}
        placeholder="Search Player..."
        value={search}
        onChange={handleSearch}
      />

      {/* Cards */}
      <div className={CardsStyles["cards-container"]}>
        {displayData.map((player, key) => {
          return (
            // <div className="card" style={{ width: "17rem" }} key={key}>
            // {/* Display either images or statistics */}
            <Cards {...player} key={key} />
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsDisplay;
