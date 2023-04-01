import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '/src/components/SearchBar';
import { PuzzleIcon } from '/src/components/Icons';

export default function Navbar() {
  return (
    <>
      <div className="navbar">

        <Link to="/" className="icon-container">
          <img className="icon" src="/avatar.png" alt="logo do portal" />
          Portal
        </Link>
        <Link to="/">Quebra-cabeças <PuzzleIcon/></Link>
        <a href="#footer">Sobre</a>
      </div>
      
      <div className="puzzles" />
    </>
  )
}