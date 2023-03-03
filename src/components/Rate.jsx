import { useState, useRef } from 'react';

export default function Rate() {
  let [rating, setRating] = useState(null);
  let [stars, setStars] = useState(0);
  let [feedbackSent, setFeedbackSent] = useState(false);
  let starsDiv = useRef();
  let feedback = useRef();
  
  function handleMouseOver(e) {
    if (feedbackSent) return;
    let pos = starsDiv.current.getBoundingClientRect();
    setStars(Math.round((e.clientX + 15 - pos.left) * 5 / pos.width));
  }

  function handleClick(e) {
    if (feedbackSent) return;
    let pos = starsDiv.current.getBoundingClientRect();
    console.log(e, pos)
    setRating(Math.round((e.clientX + 15 - pos.left) * 5 / pos.width));
  }

  function getStarCss(starNumber) {
    return stars >= starNumber || (rating >= starNumber && !stars) ? " light-yellow-star" : "";
  }

  function sendFeedback() {
    setFeedbackSent(true);
  }
  
  return (
    <div className="rate">
      <h2>Avalie o desafio:</h2>
      <div 
        className="stars" 
        ref={starsDiv}
        onMouseMove={handleMouseOver}
        onMouseLeave={() => setStars(0)} 
        onClick={handleClick}
      >
        <i className={"fa-solid fa-star" + getStarCss(1)} />
        <i className={"fa-solid fa-star" + getStarCss(2)} />
        <i className={"fa-solid fa-star" + getStarCss(3)} />
        <i className={"fa-solid fa-star" + getStarCss(4)} />
        <i className={"fa-solid fa-star" + getStarCss(5)} />
      </div>
      <div className={"comments" + (rating && !feedbackSent ? " comments-visible" : " comments-hidden")}>
        <h2>Envie uma sugestão para a melhoria do desafio:</h2>
        <div className="textarea-wrapper"><textarea ref={feedback} /></div>
        <div className="button button-purple" onClick={sendFeedback}>Enviar</div>
      </div>
      <h2 className={feedbackSent ? "thanks" : "hidden"}>Obrigado!</h2>
    </div>
  )
}