
function ThemeSelection({ theme, toggleTheme }) {
    return (
        <div className="theme" aria-label='Click this button to change the theme'>
            <button aria-label="switch to another mode" onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            </button>
        </div>
    );
}

export default ThemeSelection;
