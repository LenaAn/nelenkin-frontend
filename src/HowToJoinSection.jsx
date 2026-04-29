import './Section.css'

function HowToJoinSection() {
    return (
        <section className="section section-join">
            <div className="container section-join-inner">
                <div className="section-text-block">
                    <h2 className="section-title section-title--light">Как вступить</h2>
                    <p className="section-description">
                        Просто вступить в группу и написать интро про себя с хэштегом
                        #whois — чем занимаешься, где работаешь или учишься, где живешь,
                        в какой активности хочешь участвовать в клубе.
                        <br/><br/>
                        Клуб держится на доверии и активном участии членов клуба. Когда
                        ты пишешь содержательное интро о себе, ты даешь возможность
                        другим членам клуба задать тебе вопрос / попросить совета /
                        позвать на сходку.
                        <br/><br/>
                        Интро уже состоящих в клубе людей ты можешь найти по хэштегу
                        #whois.
                    </p>
                    <div className="section-actions">
                        <button className="btn btn--light">Вступить</button>
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

export default HowToJoinSection
