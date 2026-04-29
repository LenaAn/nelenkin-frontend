import './Section.css'

function CalendarSection() {
    return (
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
    )
}

export default CalendarSection
