import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isTelegramOpen, setIsTelegramOpen] = useState(false);
    const [isHistoryRedirectOpen, setIsHistoryRedirectOpen] = useState(false);

    const openTelegramModal = () => {
        window.gtag?.('event', 'open_telegram_modal', {
            event_category: 'conversion',
        });

        setIsTelegramOpen(true);
    };

    const closeTelegramModal = () => {
        setIsTelegramOpen(false);
    };

    const openHistoryModal = () => {
        window.gtag?.('event', 'open_history_modal', {
            event_category: 'conversion',
        });

        setIsHistoryRedirectOpen(true);
    };

    const closeHistoryModal = () => {
        setIsHistoryRedirectOpen(false);
    };

    return (
        <ModalContext.Provider value={{
            openTelegramModal,
            openHistoryModal
        }}>
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

            {isHistoryRedirectOpen && (
                <div className="modal-overlay" onClick={closeHistoryModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>
                            Это редирект на vas3k.club
                        </h2>
                        <p className="modal-description">
                            Осенью 2024 года я написала статью о том, как зародился клуб.
                            <br/><br/>
                            С тех пор в клубе появилось много новых активностей, но основные принципы остались те же!
                        </p>

                        <a
                            href="https://vas3k.club/post/26356/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary"
                            onClick={() => {
                                window.gtag?.('event', 'click_vas3k_link', {
                                    event_category: 'conversion',
                                });
                            }}
                        >
                            Перейти на vas3k.club
                        </a>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    )
        ;
}

export const useModal = () => useContext(ModalContext);
