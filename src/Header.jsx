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
                <button className="btn header-btn btn--outline">
                    <span className="btn-text">Войти</span>
                </button>
            </div>
        </header>
    )
}

export default Header
