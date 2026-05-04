import './Section.css'

function PastBoooksSection() {
    return (
        <section className="section section-about">
            <div className="container section-inner">
                <div className="section-text-block">
                    <h1 className="section-title">Какие книги читаем?</h1>
                    <div className="section-description">
                        <p>
                            Сейчас идут потоки по
                        </p>
                        <ol className="about-list">
                            <li>Designing Data-Intensive Applications</li>
                            <li>Leetcode Grind</li>
                            <li>Leetcode Mocks</li>
                        </ol>
                        <br/>
                        А до этого читали
                        <ol className="about-list">
                            <li>Site Reliability Engineering: How Google Runs Production Systems</li>
                            <li>Designing Machine Learning Systems</li>
                            <li>Leetcode Mocks</li>
                        </ol>
                    </div>

                    <div className="section-actions">
                        <a href="https://vas3k.club/post/26356/" target="_blank" rel="noopener noreferrer"
                           className="btn btn--primary">Про историю клуба</a>
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
