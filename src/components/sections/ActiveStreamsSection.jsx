import './Section.css'

function ActiveStreamsSection({blueSection}) {
    return (
        <section className={`section ${blueSection ? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h2 className={`section-title ${blueSection ? 'section-title--light' : ''}`}>А какие потоки идут
                        прямо сейчас?</h2>
                    <p className="section-description">
                        Активные потоки сейчас:
                    </p>
                    <ol className="about-list section-description">
                        <li>The Software Engineer's Guidebook (скоро начнется! 💖)</li>
                        <li>Designing Data-Intensive Applications (второе издание)</li>
                        <li>Разбираем задачи из списка Leetcode-75</li>
                        <li>Каждую неделю устраиваем моки на определенную тему с Leetcode</li>
                    </ol>
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
