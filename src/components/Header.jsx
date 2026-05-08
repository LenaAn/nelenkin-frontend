import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <img
                        className="header-logo"
                        src="/img/logo.svg"
                        alt="(не) Ленкин клуб"
                    />
                </Link>
                <a href="https://t.me/neLenkin_bot" target="_blank" rel="noopener noreferrer"
                   className="btn header-btn btn--outline">к Telegram-боту</a>
            </div>
        </header>
    )
}

export default Header
