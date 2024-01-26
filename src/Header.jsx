import './css/Header.css';
import logo from './images/logo.png';
import Modal from './components/Modal';
import GlobalNav from './components/GlobalNav';

function Header({ goToPage }) {
    return (
        <header className="header">
            <img className="header-logo" 
                src={logo}
                alt="a grey moon"
            />
            <h1 className="header-title" >
                Horror Zone
            </h1>
            <Modal className="header-modal" />
            <GlobalNav className="header-nav" goToPage={goToPage}/>
        </header>
    );
}

export default Header;
