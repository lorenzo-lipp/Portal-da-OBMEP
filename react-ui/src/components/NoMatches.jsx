export default function NoMatches({ show, search, keywords }) {
  if (!show) return (<></>);
  let message = "Não foi possível encontrar nenhum quebra-cabeças com esse nome!";
  let keywordsArr = Object.keys(keywords);

  if (keywordsArr.length) {
    let keywordsStr = keywordsArr.map((v, i) => i !== keywordsArr.length - 1 ? v.toLowerCase() + (i === keywordsArr.length - 2 ? " e " : ", ") : v.toLowerCase()).join('');
    if (!search) message = `Não foi possível encontrar nenhum quebra-cabeças sobre ${keywordsStr}!`;
  else message = `Não foi possível encontrar nenhum quebra-cabeças com esse nome sobre ${keywordsStr}!`;
  }
  
  return (
    <div className="noMatches" dangerouslySetInnerHTML={{__html: message}} />
  );
}