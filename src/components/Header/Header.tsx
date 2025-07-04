import React from "react";
import "./Header.scss";
import pokedex_bg from "../../assets/hero/pokedex_bg.png";
import pokedex_logo from "../../assets/pokedex-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={pokedex_bg} alt="pokedex-bg" className="pokedex-bg" />
      <img src={pokedex_logo} alt="pokedex-logo" className="pokedex-logo" />
    </div>
  );
};

export default Header;
