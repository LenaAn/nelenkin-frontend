import './Page.css'

function Page() {
    return (
        <main className="page-main">
            <section className="section section-about">
                <div className="container section-about-inner">
                    <div className="about-text-block">
                        <h1 className="section-title">О клубе</h1>

                        <div className="about-description">
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

                    <div className="about-illustration">
                        <img
                            className="about-image"
                            src="/img/book.svg"
                            alt="Иллюстрация клуба"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page
