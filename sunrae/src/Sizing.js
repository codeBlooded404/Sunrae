import { useState } from "react";
import "./Sizing.css";

function Sizing() {
  const categories = [
    "- X-Small -",
    "- Small -",
    "- Medium -",
    "- Large -",
    "- X-Large -",
    "- XX-Large -",
    "- XX-Large -",
  ];

  const [category, setCategory] = useState("Select Size : ");

  return (
    <form className="header__searchForm ">
      <div className="header__selectInput">
        <span className="header__selectInputText">{category}</span>

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>Select The Size</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default Sizing;
