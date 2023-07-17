import getKeywordsAvailable from '/src/utils/getKeywordsAvailable';
import { SearchIcon } from '/src/components/Icons';
import { useRef } from 'react';
const availableKeywords = getKeywordsAvailable();

export default function SearchBar({ visible, search, callback, keywords, setKeywords }) {
  let measureDiv = useRef();
  
  function addOrRemoveKeyword(keyword) {
    let newKeywords = { ...keywords };

    if (!newKeywords[keyword]) newKeywords[keyword] = true;
    else delete newKeywords[keyword];

    setKeywords(newKeywords);
  }

  return (
    <div className="search-bar-container" 
      style={{height: visible ? measureDiv.current.clientHeight : 0}}
    >
      <div ref={measureDiv}>
        <div className="search-bar">
          <input
            type="text"
            value={search}
            onChange={(e) => callback(e.target.value)}
            placeholder="Digite aqui o nome do desafio"
          />
          <SearchIcon />
        </div>
        <div className="search-bar search-bar-row">
          {availableKeywords.map(keyword => {
            return (
              <div className={"search-bar-checkbox-" + (keywords[keyword] ? "marked" : "unmarked")} key={keyword}>
                <div className={keywords[keyword] ? "checkbox-marked" : "checkbox-unmarked"} onClick={() => addOrRemoveKeyword(keyword)} />
                <label onClick={() => addOrRemoveKeyword(keyword)}>{keyword}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}