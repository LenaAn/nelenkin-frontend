import './Section.css'
import {useModal} from "../ModalContext.jsx";

function TelegramBotSection({blueSection}) {
    const { openTelegramModal } = useModal();

    return (
        <section className={`section ${blueSection ? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h2 className={`section-title ${blueSection ? 'section-title--light' : ''}`}>Как вступить?</h2>
                    <p className="section-description">
                        Общение происходит в группе в Telegram, вступить в нее можно через Telegram бот.
                        <br/><br/>
                        А еще бот
                    </p>
                    <ol className="about-list section-description">
                        <li>Знает, какие потоки сейчас активны</li>
                        <li>Присылает ссылку на Zoom звонок за 5 минут до встречи</li>
                        <li>Делает рассылку новостей клуба, объявляет о новых потоках и сходках в разных
                            городах
                        </li>
                        <li>Следит, чтобы не было анонимов — чтобы вступить в клуб, надо написать интро в боте</li>
                    </ol>
                    <div className="section-actions">
                        <button
                            className={`btn ${blueSection ? 'btn--light' : 'btn--primary'}`}
                            onClick={openTelegramModal}
                        >
                            Вступить в клуб
                        </button>
                    </div>
                </div>

                <img
                    className="section-image"
                    src={`${blueSection ? '/img/sparkles.svg' : '/img/book.svg'}`}
                    alt="Декоративные звёздочки"
                />
            </div>
        </section>
    )
}

export default TelegramBotSection
