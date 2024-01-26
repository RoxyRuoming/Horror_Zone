import Home from './Home';
import About from './About';
import News from './News';
import Shop from './Shop';
import ThemeSelection from './components/ThemeSelection';
import './css/Main.css';
import { useState } from 'react';

function Main({ page }) {
    // switch the light/dark mode
    const [theme, setTheme] = useState('dark');

    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
            <main id="main" className={`main ${theme}`}>
                {(page === '/') && <Home />}
                {(page === '/about.html') && <About />}
                {(page === '/news.html') && <News />}
                {(page === '/shop.html') && <Shop />}
                <ThemeSelection theme={theme} toggleTheme={toggleTheme} />
            </main>
    );
}

export default Main;
