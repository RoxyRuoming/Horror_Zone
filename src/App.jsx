import './css/App.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState('/');

  function goToPage(e) {
    e.preventDefault();
    const Page = e.target.getAttribute('href');
    setPage(Page);
  }

  return (
    <div className="app bg-image">
      <a class="skiplink" href="#main" tabIndex='1' aria-label="Click here to skip to main content">Skip to main content</a>
      <Header goToPage={goToPage} />
      <Main page={page} goToPage={goToPage} />
      <Footer />
    </div>
  );
}

export default App;
