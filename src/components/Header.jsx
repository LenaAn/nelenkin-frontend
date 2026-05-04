import './Header.css'

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <img
                    className="header-logo"
                    src="/img/logo.svg"
                    alt="(не) Ленкин клуб"
                />
                <a href="https://t.me/neLenkin_bot" target="_blank" rel="noopener noreferrer"
                   className="btn header-btn btn--outline">к Telegram-боту</a>
            </div>
        </header>
    )
}

export default Header
