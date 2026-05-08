import './Header.css'
import {Link} from "react-router-dom";
import {useState} from "react";

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        onClick={() => setIsModalOpen(true)}
                    >
                        Вступить в клуб
                    </button>
                </div>
            </header>

            {isModalOpen && (
                <div
                    className="modal-overlay"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>
                            Клуб пока живет в Telegram!
                        </h2>
                        <p className="modal-description">
                            Обсуждения проходят в закрытой группе, в которую можно вступить через бот
                        </p>

                        <a
                            href="https://t.me/neLenkin_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary"
                        >
                            Открыть в Telegram
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header
