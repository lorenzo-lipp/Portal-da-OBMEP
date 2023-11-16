import { useState } from 'react';
import useQuery from '/src/hooks/useQuery';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '/src/components/SearchBar';
import { MenuIcon, CancelIcon } from "/src/components/Icons";
import "./css/Navbar.css";
import "./css/Searchbar.css";

export default function Navbar({ data, search, callback, keywords, setKeywords }) {
  const [visible, setVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  let location = useLocation();
  let samePage = location.pathname + location.search;
  let query = useQuery();

  function handleClick() {
    setVisible(!visible);
    callback("");
    setKeywords({});
  }

  function renderSearchBar() {
    if (search !== undefined) return (
        <SearchBar 
          data={data}
          visible={visible} 
          search={search} 
          callback={callback} 
          keywords={keywords} 
          setKeywords={setKeywords} 
        />
    );
  }

  function toggleHamburger() { setNavbarVisible(!navbarVisible); }

  return (
    <>
      <div className="navbar">

        <Link to="/" className="icon-container">
          <img className="icon" src="/avatar.png" alt="logo do portal" />
          Portal
        </Link>
        <div className={"navbar-container " + (navbarVisible ? "navbar-visible" : "")} onClick={toggleHamburger}>
          <Link to="/?aulas">Aulas introdutórias</Link>
          <Link to="/?desafios">Quebra-cabeças</Link>
          <Link to="/?videoaulas">Vídeo aulas</Link>
          {query.get("desafios") !== null ? <Link to={samePage} id="navbar-search" onClick={handleClick}>Pesquisar</Link> : null}
          <a href="#footer">Sobre</a>
        </div>
        <div className="navbar-hamburger" onClick={toggleHamburger}>{navbarVisible ? <CancelIcon className="fa-hamburger-close" /> : <MenuIcon />}</div>
      </div>

      
      {renderSearchBar()}
      
      <div className="puzzles" />
    </>
  )
}