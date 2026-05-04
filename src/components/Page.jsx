import './Page.css'
import AboutSection from "./sections/AboutSection.jsx";
import HowThisWorksSection from "./sections/HowThisWorksSection.jsx";
import CalendarSection from "./sections/CalendarSection.jsx";
import TelegramBotSection from "./sections/TelegramBotSection.jsx"

function Page() {
    return (
        <main className="page-main">
            <AboutSection/>
            <HowThisWorksSection/>
            <TelegramBotSection/>
            <CalendarSection/>
        </main>
    )
}

export default Page
