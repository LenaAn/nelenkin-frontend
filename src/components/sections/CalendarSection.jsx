import './Section.css'

function CalendarSection() {
    return (
        <section className="section section-calendar">
            <div className="container section-calendar-inner">
                <h2 className="section-title section-title--center">
                    Календарь наших событий
                </h2>
                <iframe className="calendar-frame"
                    src="https://calendar.google.com/calendar/embed?src=f9b540541697defb8f20606ae563c7f2bb42e1c16cb3a15e9a887a43fd33acb8%40group.calendar.google.com&ctz=Europe%2FBelgrade"
                    style={{ border: 0 }} width="800" height="600" frameBorder="0" scrolling="no">
                </iframe>
            </div>
        </section>
    )
}

export default CalendarSection
