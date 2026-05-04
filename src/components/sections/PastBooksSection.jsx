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
                            <li>Designing Data-Intensive Applications</li>
                            <li>Site Reliability Engineering: How Google Runs Production Systems</li>
                            <li>Designing Machine Learning Systems</li>
                        </ol>
                        <br/>
                        А также прорешали
                        <ol className="about-list">
                            <li>Advent Of Code 2024</li>
                            <li>Advent Of Code 2025</li>
                            <li>Redis CodeCrafters</li>
                            <li>Redis Kafka</li>
                        </ol>
                        <br/>
                        А еще вместе готовимся к алгоритмическим собеседованиям
                        <ol className="about-list">
                            <li>Разбираем задачи из списка LeetCode 75</li>
                            <li>Каждую неделю проводим моки по Leetcode</li>
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

export default PastBoooksSection
