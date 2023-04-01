import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '/src/components/SearchBar';
import { PuzzleIcon, SearchIcon } from '/src/components/Icons';

export default function Navbar({ search, callback, keywords, setKeywords }) {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!visible);
    callback("");
    setKeywords({});
  }

  return (
    <>
      <div className="navbar">

        <Link to="/" className="icon-container">
          <img className="icon" src="/avatar.png" alt="logo do portal" />
          Portal
        </Link>
        <Link to="#" id="navbar-search" onClick={handleClick}>Pesquisar</Link>
        <a href="#footer">Sobre</a>
      </div>
      
      <SearchBar 
        visible={visible} 
        search={search} 
        callback={callback} 
        keywords={keywords} 
        setKeywords={setKeywords} 
      />
      
      <div className="puzzles" />
    </>
  )
}