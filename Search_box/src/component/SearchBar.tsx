import { FaSearch } from "react-icons/fa";
import style from "./SearchBar.module.css";

interface SeacrBarProp {
  getData: Function;
  query: string
}

export const SearchBar = (prop: SeacrBarProp) => {
  
  function handleChange(event: HTMLInputElement) {
    prop.getData(event.value);
  }

  return (
    <div className={style.inputwrapper}>
      <input
        className={style.input}
        value = {prop.query}
        name="searchbar"
        placeholder="Type to search.."
        onChange={(e) => handleChange(e.target)}
      />
      <FaSearch id="search-icon"></FaSearch>
    </div>
  );
};
