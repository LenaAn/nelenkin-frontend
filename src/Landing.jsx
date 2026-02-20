import './Global.css'
import './Landing.css'

function Landing() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="header-logo-group">
            <img
              className="header-logo"
              src="/img/logo.svg"
              alt="(не) Ленкин клуб"
            />
          </div>
          <button className="btn btn--outline">Войти</button>
        </div>
      </header>

      {/* MAIN */}
      <main className="page-main">
        {/* ABOUT */}
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

        {/* HOW TO JOIN */}
        <section className="section section-join">
          <div className="container section-join-inner">
            <div className="join-text-block">
              <h2 className="section-title section-title--light">Как вступить</h2>
              <p className="join-description">
                Просто вступить в группу и написать интро про себя с хэштегом
                #whois — чем занимаешься, где работаешь или учишься, где живешь,
                в какой активности хочешь участвовать в клубе.
                <br /><br />
                Клуб держится на доверии и активном участии членов клуба. Когда
                ты пишешь содержательное интро о себе, ты даешь возможность
                другим членам клуба задать тебе вопрос / попросить совета /
                позвать на сходку.
                <br /><br />
                Интро уже состоящих в клубе людей ты можешь найти по хэштегу
                #whois.
              </p>
              <div className="section-actions">
                <button className="btn btn--light">Вступить</button>
              </div>
            </div>

            <div className="join-illustration">
              <img
                className="join-image"
                src="/img/sparkles.svg"
                alt="Декоративные звёздочки"
              />
            </div>
          </div>
        </section>

        {/* ACTIVITIES */}
        <section className="section section-activities">
          <div className="container activities-inner">
            {/* Left column */}
            <div className="activities-column">
              <article className="activity-card activity-card--solve">
                <img
                  className="activity-icon"
                  src="/img/arrow.svg"
                  alt="Стрелка"
                />
                <div className="activity-content">
                  <div className="activity-content-block">
                    <h3 className="activity-title">Решаем leetcode</h3>
                    <p className="activity-text">
                      Решаем Leetcode вот таким образом и таким образом, а также
                      вот таким вот.
                    </p>
                  </div>
                </div>
              </article>

              <article className="activity-card activity-card--read">
                <img
                  className="activity-icon"
                  src="/img/arrow.svg"
                  alt="Стрелка"
                />
                <div className="activity-content">
                  <div className="activity-content-block">
                    <h3 className="activity-title activity-title--read">
                      Читаем книжки
                    </h3>
                    <p className="activity-text activity-text--read">
                      Всякие разные.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Right column */}
            <div className="activities-column activities-column--right">
              <article className="activity-card activity-card--gather">
                <img
                  className="activity-icon"
                  src="/img/arrow.svg"
                  alt="Стрелка"
                />
                <div className="activity-content">
                  <div className="activity-content-block">
                    <h3 className="activity-title activity-title--gather">
                      Ходим на сходки
                    </h3>
                    <p className="activity-text activity-text--gather">
                      Решаем Leetcode вот таким образом и таким образом, а также
                      вот таким вот.
                    </p>
                  </div>
                </div>
              </article>

              <div className="activities-row">
                {/* Interview card */}
                <article
                  className="activity-card activity-card--outline activity-card--interview"
                >
                  <img
                    className="activity-icon"
                    src="/img/arrow.svg"
                    alt="Стрелка"
                  />
                  <div className="activity-content activity-content--interview">
                    <div className="activity-content-block">
                      <h3 className="activity-title">
                        готовимся к&nbsp;собесам
                      </h3>
                      <p className="activity-text">
                        Решаем Leetcode вот таким образом и таким образом, а
                        также вот таким вот.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Pencil block */}
                <div className="activity-pencil-card">
                  <img
                    className="activity-pencil-image"
                    src="/img/pencil.svg"
                    alt="Карандаш"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALENDAR */}
        <section className="section section-calendar">
          <div className="container section-calendar-inner">
            <h2 className="section-title section-title--center">
              Календарь наших событий
            </h2>
            <div className="calendar-frame">
              <img
                className="calendar-image"
                src="/img/calendar.png"
                alt="Календарь событий"
              />
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section section-pricing">
          <div className="container pricing-inner">
            <article className="pricing-card pricing-card--free">
              <div className="pricing-header">
                <div className="pricing-price">$0</div>
                <div className="pricing-period">/ В месяц</div>
              </div>
              <p className="pricing-text">
                Тебе будут доступны Random Coffee без ограничений и участие в
                бесплатных потоках. Время от времени также проходят
                оффлайн-сходки в городах и появляются эксклюзивные вакансии!
              </p>
              <div className="pricing-actions">
                <button className="btn btn--light">Войти</button>
              </div>
            </article>

            <article className="pricing-card pricing-card--paid">
              <div className="pricing-header">
                <div className="pricing-price">$20</div>
                <div className="pricing-period">/ В месяц</div>
              </div>
              <p className="pricing-text">
                Чтобы улучшить подписку, сделай презентацию либо подпишись на
                Patreon хотя бы на $15 в месяц.
              </p>
              <div className="pricing-actions">
                <button className="btn btn--light">Оформить</button>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-faq">
          <div className="container faq-inner">
            <h2 className="section-title section-title--center">
              часто задаваемые вопросы
            </h2>

            <div className="faq-list">
              <article className="faq-item">
                <div className="faq-icon">
                  <img
                    className="faq-icon-image"
                    src="/img/1.svg"
                    alt="Шаг 1"
                  />
                </div>
                <div className="faq-content">
                  <h3 className="faq-question">Как подключиться к боту?</h3>
                  <p className="faq-answer">
                    Это очень просто: нажми на кнопку. Или не нажимай. Мы рады
                    тебе в любом случае, вне зависимости от твоего решения
                    нажимать кнопку или нет. Но лучше нажми.
                  </p>
                </div>
              </article>

              <article className="faq-item">
                <div className="faq-icon">
                  <img
                    className="faq-icon-image"
                    src="/img/2.svg"
                    alt="Шаг 2"
                  />
                </div>
                <div className="faq-content">
                  <h3 className="faq-question">Как оформить подписку?</h3>
                  <p className="faq-answer">
                    Это очень просто: нажми на кнопку. Или не нажимай. Мы рады
                    тебе в любом случае, вне зависимости от твоего решения
                    нажимать кнопку или нет. Но лучше нажми.
                  </p>
                </div>
              </article>

              <article className="faq-item">
                <div className="faq-icon">
                  <img
                    className="faq-icon-image"
                    src="/img/3.svg"
                    alt="Шаг 3"
                  />
                </div>
                <div className="faq-content">
                  <h3 className="faq-question">
                    Какой у меня должен быть уровень по проектированию систем
                    обработки данных?
                  </h3>
                  <p className="faq-answer">
                    Это очень просто: нажми на кнопку. Или не нажимай. Мы рады
                    тебе в любом случае, вне зависимости от твоего решения
                    нажимать кнопку или нет. Но лучше нажми.
                  </p>
                </div>
              </article>

              <article className="faq-item">
                <div className="faq-icon">
                  <img
                    className="faq-icon-image"
                    src="/img/4.svg"
                    alt="Шаг 4"
                  />
                </div>
                <div className="faq-content">
                  <h3 className="faq-question">
                    Как записаться на курс по собеседованиям?
                  </h3>
                  <p className="faq-answer">
                    Это очень просто: нажми на кнопку. Или не нажимай. Мы рады
                    тебе в любом случае, вне зависимости от твоего решения
                    нажимать кнопку или нет. Но лучше нажми.
                  </p>
                </div>
              </article>

              <article className="faq-item">
                <div className="faq-icon">
                  <img
                    className="faq-icon-image"
                    src="/img/5.svg"
                    alt="Шаг 5"
                  />
                </div>
                <div className="faq-content">
                  <h3 className="faq-question">Как подключиться к календарю?</h3>
                  <p className="faq-answer">
                    Это очень просто: нажми на кнопку. Или не нажимай. Мы рады
                    тебе в любом случае, вне зависимости от твоего решения
                    нажимать кнопку или нет. Но лучше нажми.
                  </p>
                </div>
              </article>

              <article className="faq-item">
                <div className="faq-icon">
                  <img
                    className="faq-icon-image"
                    src="/img/6.svg"
                    alt="Шаг 6"
                  />
                </div>
                <div className="faq-content">
                  <h3 className="faq-question">
                    А тем, кто пропустил занятие, будет доступна запись?
                  </h3>
                  <p className="faq-answer">
                    Это очень просто: нажми на кнопку. Или не нажимай. Мы рады
                    тебе в любом случае, вне зависимости от твоего решения
                    нажимать кнопку или нет. Но лучше нажми.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">(не) Ленкин клуб</div>
          <div className="footer-copy">© 2025</div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
