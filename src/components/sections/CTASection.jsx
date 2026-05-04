import './Section.css'

function AboutSection({blueSection}) {
    return (
        <section className={`section ${blueSection? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h1 className={`section-title cta-section-title ${blueSection ? 'section-title--light' : ''}`}>Вступить в клуб</h1>
                    <div className="cta-actions section-actions">
                        <a href="https://t.me/neLenkin_bot" target="_blank" rel="noopener noreferrer"
                           className={`btn ${blueSection ? 'btn--light' : 'btn--primary'}`}>к Telegram-боту</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
