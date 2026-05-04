import './Section.css'

function HowThisWorksSection() {
    return (
        <section className="section section-join">
            <div className="container section-inner">
                <div className="section-text-block">
                    <h2 className="section-title section-title--light">Как это работает?</h2>
                    <p className="section-description">
                        Участники читают главу в своем темпе, а на звонке раз в неделю обсуждаем, кто что понял или не
                        понял!
                        Также делимся историями из личного опыта и обсуждаем материал из дополнительных ссылок.
                        <br/><br/>
                        Каждую неделю есть докладчик, который делает презентацию по главе. Но презентация не обязана
                        полностью пересказывать главу, она скорее задает структуру встречи служит толчком к обсуждению.
                        <br/><br/>
                        <b>Примеры вопросов, которые обсуждаются на звонках:</b>
                        <ol className="about-list">
                            <li>У кого получилось переехать с реляционной базы данных на NoSQL и стоило ли оно того</li>
                            <li>Как у нас в компании применяют Kafka</li>
                            <li>Отличие SRE от DevOps</li>
                            <li>Когда компании пора завести отдельную MLOps команду</li>
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
