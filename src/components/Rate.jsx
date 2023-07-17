import { useState, useRef } from 'react';
import { StarIcon, SendIcon, CancelIcon } from '/src/components/Icons';
import "./css/Buttons.css";
import "./css/Rate.css";

export default function Rate({ name }) {
  let [rating, setRating] = useState(null);
  let [stars, setStars] = useState(0);
  let [feedbackSent, setFeedbackSent] = useState(false);
  let starsDiv = useRef();
  let feedback = useRef();
  
  function handleMouseOver(e) {
    if (feedbackSent || rating > 0) return;
    let pos = starsDiv.current.getBoundingClientRect();
    setStars(Math.round((e.clientX + 15 - pos.left) * 5 / pos.width));
  }

  function handleClick(e) {
    if (feedbackSent) return;
    let pos = starsDiv.current.getBoundingClientRect();
    let newRating = Math.round((e.clientX + 15 - pos.left) * 5 / pos.width);
    if (newRating === rating) {
      setRating(0);
      setStars(0);
    } else setRating(newRating);
  }

  function getStarCss(starNumber) {
    return stars >= starNumber || (rating >= starNumber && !stars) ? " light-yellow-star" : "";
  }

  function sendFeedback() {
    setFeedbackSent(true);
    fetch("https://formspree.io/f/xknaqlpk", {
      method: "POST",
      body: JSON.stringify({
        "material": name,
        "estrelas": stars,
        "comentario": feedback.current.value
      }),
      headers: {'Content-Type': 'application/json'}
    })
  }
  
  return (
    <div className="rate">
      <h2>Avalie o material:</h2>
      <div 
        className="stars" 
        ref={starsDiv}
        onMouseMove={handleMouseOver}
        onMouseLeave={() => setStars(0)} 
        onClick={handleClick}
      >
        <StarIcon className={getStarCss(1)} />
        <StarIcon className={getStarCss(2)} />
        <StarIcon className={getStarCss(3)} />
        <StarIcon className={getStarCss(4)} />
        <StarIcon className={getStarCss(5)} />
      </div>
      <div className={"comments" + (rating && !feedbackSent ? " comments-visible" : " comments-hidden")}>
        <h2>Deseja enviar um comentário sobre o material?</h2>
        <div className="textarea-wrapper">
          <textarea ref={feedback} placeholder="Escreva aqui o seu comentário..." />
        </div>
        <div className="sendbuttons buttons">
          <div className="button button-red" onClick={() => setFeedbackSent(true)}><CancelIcon /> Não</div>
          <div className="button button-green" onClick={sendFeedback}>Enviar <SendIcon /></div>
        </div>
      </div>
      <h2 className={feedbackSent ? "thanks" : "hidden"}>Obrigado!</h2>
    </div>
  )
}