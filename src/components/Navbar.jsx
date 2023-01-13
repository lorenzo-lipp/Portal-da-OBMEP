import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '/src/components/SearchBar';

export default function Navbar({ showSearch, search, callback }) {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!visible);
    callback("");
  }
  
  return (
    <>
      <div className="navbar">
        
        <Link to="/" className="icon-container">
          <img className="icon" src="/avatar.png"/>
          Portal
        </Link>
        <Link to="/">Quebra-cabeças</Link>
        <a href="#footer">Sobre</a>
        {showSearch ? <Link to="#" onClick={handleClick}>
          Busca
        </Link> : <></>}
      </div>
      {showSearch ? <SearchBar visible={visible} search={search} callback={callback} /> : <></>}
      <div className="puzzles"/>
    </>
  )
}