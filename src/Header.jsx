import './Header.css'

function Header() {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <div className="header-logo-group">
                    <img
                        className="header-logo"
                        src="/img/logo.svg"
                        alt="(не) Ленкин клуб"
                    />
                </div>
                <button className="btn btn--outline">
                    <span className="btn-text">Войти</span>
                </button>
            </div>
        </header>
    )
}

export default Header
