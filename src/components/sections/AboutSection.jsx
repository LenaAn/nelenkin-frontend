import './Section.css'

function AboutSection({blueSection}) {
    return (
        <section className={`section ${blueSection? 'section-blue' : 'section-white'}`}>
            <div className="container section-inner">
                <div className="section-text-block">
                    <h1 className={`section-title ${blueSection ? 'section-title--light' : ''}`}>О клубе</h1>
                    <div className="section-description">
                        <p>
                            Вместе читаем сложные книги по программированию и пишем код по фану.
                            <br/><br/>
                            Зачем?
                        </p>
                        <ol className="about-list">
                            <li>Чтобы не забросить на середине</li>
                            <li>Чтобы послушать истории от опытных коллег</li>
                            <li>Чтобы поделиться знаниями в юутной обстановке</li>
                        </ol>
                    </div>

                    <div className="section-actions">
                        <a href="https://vas3k.club/post/26356/" target="_blank" rel="noopener noreferrer"
                           className={`btn ${blueSection ? 'btn--light' : 'btn--primary'}`}>Про историю клуба</a>
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
