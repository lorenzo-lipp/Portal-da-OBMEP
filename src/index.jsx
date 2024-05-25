import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';

ReactDOM.createRoot(document.querySelector('#root')).render(
	<React.StrictMode>
    <BrowserRouter >
      <ScrollToTop />
      <App />
    </BrowserRouter>
	</React.StrictMode>
)

document.addEventListener("scroll", (e) => {
  // Prevents Google Chrome bug, where an iframe can scroll a parent page
  if (e.target.activeElement && e.target.activeElement.tagName === "IFRAME") {
    setTimeout(() => window.scrollTo(window.scrollX, window.scrollY), 1);
  } 
});