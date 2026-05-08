import './Section.css'
import {useModal} from "../ModalContext.jsx";

function HowThisWorksSection({blueSection}) {
    const { openTelegramModal } = useModal();

    return (
        <section className={`section ${blueSection ? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h2 className={`section-title ${blueSection ? 'section-title--light' : ''}`}>Как это работает?</h2>
                    <p className="section-description">
                        Участники читают главу (решают задачи/разбирают тему) сами в течение недели, а на звонке
                        обсуждаем, кто что понял или не понял!
                        Также делимся историями из личного опыта и обсуждаем материал из дополнительных ссылок.
                        <br/><br/>
                        На звонке есть докладчик, который делает презентацию по теме недели. Этим докладчиком можешь
                        стать ты! Достаточно просто записаться в таблицу.
                        <br/><br/>
                        Докладчик не обязан быть экспертом по теме, а презентация не должна полностью пересказывать
                        тему,
                        она только задает структуру встречи служит толчком к обсуждению.
                    </p>
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

export default HowThisWorksSection
