import './Section.css'

function ActiveStreamsSection({blueSection}) {
    return (
        <section className={`section ${blueSection ? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h2 className={`section-title ${blueSection ? 'section-title--light' : ''}`}>А какие потоки идут
                        прямо сейчас?</h2>
                    <p className="section-description">
                        Прямо сейчас мы читаем Designing Data-Intensive Applications (второе издание). А также
                        тренируем алгоритмические собеседования
                        <ol className="about-list">
                            <li>Разбираем задачи из списка Leetcode-75</li>
                            <li>Каждую неделю устраиваем моки на определенную тему с Leetcode</li>
                        </ol>
                    </p>
                </div>

                <img
                    className="section-image"
                    src={`${blueSection? '/img/sparkles.svg' : '/img/book.svg'}`}
                    alt="Декоративные звёздочки"
                />
            </div>
        </section>
    )
}

export default ActiveStreamsSection
