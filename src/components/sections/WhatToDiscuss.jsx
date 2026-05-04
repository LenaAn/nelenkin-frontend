import './Section.css'

function WhatToDiscuss({blueSection}) {
    return (
        <section className={`section ${blueSection ? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h1 className={`section-title ${blueSection ? 'section-title--light' : ''}`}>Да что там
                        обсуждать?</h1>
                    <div className="section-description">
                        <br/><br/>
                        <b>Примеры вопросов, которые обсуждаются на звонках:</b>
                        <ol className="about-list">
                            <li>Миграция с реляционной базы данных на NoSQL и стоит ли оно того</li>
                            <li>Я не понял как работает consistent hashing</li>
                            <li>Как у нас в компании применяют Kafka</li>
                            <li>Любимые примеры использования фильтра Блума!</li>
                            <li>Отличие SRE от DevOps</li>
                            <li>Когда компании пора завести отдельную MLOps команду</li>
                        </ol>
                    </div>
                </div>

                <img
                    className="section-image"
                    src="/img/book.svg"
                    alt="Иллюстрация клуба"
                />
            </div>
        </section>
    )
}

export default WhatToDiscuss
