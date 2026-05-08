import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isTelegramOpen, setIsTelegramOpen] = useState(false);

    const openTelegramModal = () => {
        window.gtag?.('event', 'click_telegram_link', {
            event_category: 'conversion',
        });

        setIsTelegramOpen(true);
    };

    const closeTelegramModal = () => {
        setIsTelegramOpen(false);
    };

    return (
        <ModalContext.Provider value={{ openTelegramModal }}>
            {children}

            {isTelegramOpen && (
                <div className="modal-overlay" onClick={closeTelegramModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
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
                            onClick={() => {
                                window.gtag?.('event', 'click_telegram_link', {
                                    event_category: 'conversion',
                                });
                            }}
                        >
                            Открыть в Telegram
                        </a>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
)
    ;
}

export const useModal = () => useContext(ModalContext);
