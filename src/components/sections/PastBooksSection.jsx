import './Section.css'

function PastBoooksSection({blueSection}) {
    return (
        <section className={`section ${blueSection ? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h1 className={`section-title ${blueSection ? 'section-title--light' : ''}`}>Какие книги
                        читаем?</h1>
                    <div className="section-description">
                        Уже прочитали
                        <ol className="about-list">
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/">
                                Designing Data-Intensive Applications</a></li>
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.oreilly.com/library/view/site-reliability-engineering/9781491929117/">
                                Site Reliability Engineering: How Google Runs Production Systems</a></li>
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/">
                                Designing Machine Learning Systems</a></li>
                        </ol>
                        <br/>
                        А также прорешали
                        <ol className="about-list">
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://adventofcode.com/2024">
                                Advent Of Code 2024</a></li>
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://adventofcode.com/2025">
                                Advent Of Code 2025</a></li>
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://app.codecrafters.io/courses/redis/overview">
                                Redis CodeCrafters</a></li>
                            <li><a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://app.codecrafters.io/courses/kafka/overview">
                                Kafka CodeCrafters</a></li>
                        </ol>
                        <br/>
                        А еще вместе готовимся к алгоритмическим собеседованиям
                        <ol className="about-list">
                            <li>Разбираем задачи из списка <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://leetcode.com/studyplan/leetcode-75/">
                                LeetCode 75</a></li>
                            <li>Каждую неделю проводим моки по Leetcode</li>
                        </ol>
                    </div>
                </div>

                <img
                    className="section-image"
                    src={`${blueSection ? '/img/sparkles.svg' : '/img/book.svg'}`}
                    alt="Иллюстрация клуба"
                />
            </div>
        </section>
    )
}

export default PastBoooksSection
