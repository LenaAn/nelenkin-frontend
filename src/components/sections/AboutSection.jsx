import './Section.css'
import {useModal} from "../ModalContext.jsx";

function AboutSection({blueSection}) {
    const { openHistoryModal } = useModal();

    return (
        <section className={`section ${blueSection? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h1 className={`section-title ${blueSection ? 'section-title--light' : ''}`}>О клубе</h1>
                    <div className="section-description">
                        <p>
                            Вместе читаем сложные книги по программированию и пишем код по фану.
                            <br/><br/>
                            Зачем?
                        </p>
                        <ol className="about-list">
                            <li>Чтобы не забросить на середине</li>
                            <li>Чтобы послушать истории от опытных коллег</li>
                            <li>Чтобы поделиться знаниями в уютной обстановке</li>
                        </ol>
                    </div>

                    <div className="section-actions">
                        <button
                            onClick={openHistoryModal}
                            className={`btn ${blueSection ? 'btn--light' : 'btn--primary'}`}
                        >
                            Про историю клуба
                        </button>
                    </div>
                </div>

                <img
                    className="section-image"
                    src={`${blueSection ? '/img/sparkles.svg' : '/img/book.svg'}`}
                    alt="Иллюстрация клуба"
                />
            </div>
        </section>
    )
}

export default AboutSection
