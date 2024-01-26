import menu from '../menu';
import { useState } from "react";
import '../css/GlobalNav.css';

function GlobalNav({ className, goToPage }) {

  const list = menu.map(item => {
    return (
      <li className="global-nav-item" key={item.name}>
        <a className="global-nav-link" aria-label="swith to the page you want" 
          href={item.path}
          onClick={goToPage}>
          {item.name}
        </a>
        {item.subMenu
          ? <ul className="sub-menu">
            {item.subMenu.map(subItem => (
              <li className="sub-menu-item" key={subItem.name}>{subItem.name}</li>
            ))}
          </ul>
          : null}
      </li>
    );
  });

  const [showMenu, setShowMenu] = useState(false);
  const menuClass = showMenu ? 'global-nav-list-open' : '';

  return (
    <nav className={`global-nav ${className}`}>
      <button type="button" className="global-nav-toggle" aria-label={showMenu ? "Close Menu" : "Open Menu"}
        onClick={() => {
          console.log('button clicked!')
          setShowMenu(!showMenu)
        }}>
        <i class="gg-menu" aria-label="a menu in hamburger shape"></i>
      </button>
      <ul className={`global-nav-list ${menuClass}`}>
        {list}
      </ul>
    </nav>
  );
}

export default GlobalNav;