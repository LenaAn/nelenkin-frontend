import './Section.css'

function ActiveStreamsSection() {
    return (
        <section className="section section-join">
            <div className="container section-inner">
                <div className="section-text-block">
                    <h2 className="section-title section-title--light">А какие потоки идут прямо сейчас?</h2>
                    <p className="section-description">
                        Прямо сейчас мы читаем Designing Data-Intensive Applications (второе издание). А также
                        тренируем алгоритмические собеседования
                        <ol className="about-list">
                            <li>Разбираем задачи из списка Leetcode-75</li>
                            <li>Каждую неделю устраиваем моки на определенную тему с Leetcode</li>
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

export default ActiveStreamsSection
