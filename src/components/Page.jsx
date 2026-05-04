import './Page.css'
import AboutSection from "./sections/AboutSection.jsx";
import HowThisWorksSection from "./sections/HowThisWorksSection.jsx";
import CalendarSection from "./sections/CalendarSection.jsx";
import TelegramBotSection from "./sections/TelegramBotSection.jsx"
import PastBooksSection from "./sections/PastBooksSection.jsx"

function Page() {
    return (
        <main className="page-main">
            <AboutSection/>
            <PastBooksSection/>
            <HowThisWorksSection/>
            <TelegramBotSection/>
            <CalendarSection/>
        </main>
    )
}

export default Page
