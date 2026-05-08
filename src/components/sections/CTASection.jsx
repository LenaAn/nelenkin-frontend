import './Section.css'
import {useModal} from "../ModalContext.jsx";

function AboutSection({blueSection}) {
    const { openTelegramModal } = useModal();

    return (
        <section className={`section ${blueSection? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h1 className={`section-title cta-section-title ${blueSection ? 'section-title--light' : ''}`}>Вступить в клуб</h1>
                    <div className="cta-actions section-actions">
                        <button
                            className={`btn ${blueSection ? 'btn--light' : 'btn--primary'}`}
                            onClick={openTelegramModal}
                        >
                            Вступить в клуб
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
