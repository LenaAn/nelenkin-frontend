import './Section.css'

function AboutSection() {
    return (
        <section className="section section-about">
            <div className="container section-inner">
                <div className="section-text-block">
                    <h1 className="section-title">О клубе</h1>

                    <div className="section-description">
                        <p>
                            Клуб про System Engineering: базы данных, распределенные
                            системы, лоад балансеры, DNS резолверы и всякое такое!
                        </p>
                        <ol className="about-list">
                            <li>читаем Designing Data Intensive Applications</li>
                            <li>тренируем leetcode собесы</li>
                        </ol>
                    </div>

                    <div className="section-actions">
                        <button className="btn btn--primary">Вступить</button>
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

export default AboutSection
