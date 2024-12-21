import { useContext } from "react";
import { assets } from "../assets/assets";
import ShopContext from "../context/ShopContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
      setShowSearch(false);
    }
  }, [location, showSearch]);

  return visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} alt="search icon" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt="cross icon"
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
