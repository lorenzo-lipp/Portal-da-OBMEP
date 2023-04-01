import getKeywordsAvailable from '/src/utils/getKeywordsAvailable';
import { SearchIcon } from '/src/components/Icons';
const availableKeywords = getKeywordsAvailable();

export default function SearchBar({ visible, search, callback, keywords, setKeywords }) {
  let className = "search-bar";
  if (!visible) className += " hidden";

  function addOrRemoveKeyword(keyword) {
    let newKeywords = { ...keywords };

    if (!newKeywords[keyword]) newKeywords[keyword] = true;
    else delete newKeywords[keyword];

    setKeywords(newKeywords);
  }

  return (
    <>
      <div className={className}>
        <input
          type="text"
          value={search}
          onChange={(e) => callback(e.target.value)}
          placeholder="Digite aqui o nome do desafio"
        />
        <SearchIcon />
      </div>
      <div className={className + " search-bar-row"}>
        {availableKeywords.map(keyword => {
          return (
            <div className="search-bar-checkbox" key={keyword}>
              <div className={keywords[keyword] ? "checkbox-marked" : "checkbox-unmarked"} onClick={() => addOrRemoveKeyword(keyword)} />
              <label onClick={() => addOrRemoveKeyword(keyword)}>{keyword}</label>
            </div>
          )
        })}
      </div>
    </>
  )
}