export default function SearchBar({ visible, search, callback }) {
  let className = "search-bar";
  if (!visible) className += " hidden";
  
  return (
    <div className={className}>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => callback(e.target.value)} 
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}