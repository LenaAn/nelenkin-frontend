import './Header.css'
import {Link} from "react-router-dom";
import {useModal} from "./ModalContext.jsx";

function Header() {
    const { openTelegramModal } = useModal();

    return (
        <>
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

                    <button
                        className="btn header-btn btn--outline"
                        onClick={openTelegramModal}
                    >
                        Вступить в клуб
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
