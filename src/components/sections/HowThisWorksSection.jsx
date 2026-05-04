import './Section.css'

function HowThisWorksSection() {
    return (
        <section className="section section-join">
            <div className="container section-inner">
                <div className="section-text-block">
                    <h2 className="section-title section-title--light">Как это работает?</h2>
                    <p className="section-description">
                        Общение происходит в группе в Telegram, еще нам помогает telegram-бот.
                        <br/><br/>
                        Бот многое умеет!
                        <ol className="about-list">
                            <li>Знает, какие потоки сейчас активны</li>
                            <li>Присылает ссылку на Zoom звонок за 5 минут до встречи</li>
                            <li>Делает рассылку новостей клуба, объявляет о новых потоках и сходках в разных
                                городах
                            </li>
                            <li>Следит, чтобы не было анонимов — чтобы вступить в клуб, надо написать интро в боте</li>
                        </ol>
                    </p>
                    <div className="section-actions">
                        <a href="https://t.me/neLenkin_bot" target="_blank" rel="noopener noreferrer"
                           className="btn btn--light">к Telegram-боту</a>
                    </div>
                </div>

                <img
                    className="section-image"
                    src="/img/sparkles.svg"
                    alt="Декоративные звёздочки"
                />
            </div>
        </section>
    )
}

export default HowThisWorksSection
