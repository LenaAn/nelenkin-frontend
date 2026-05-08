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
                        <li><a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.engguidebook.com/">The Software Engineer's Guidebook</a> (скоро начнется! 💖)</li>
                        <li><a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/">
                            Designing Data-Intensive Applications (второе издание)</a></li>
                        <li>Разбираем задачи из списка <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://leetcode.com/studyplan/leetcode-75/">
                            LeetCode 75</a></li>
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
