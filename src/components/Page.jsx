import './Page.css'
import AboutSection from "./sections/AboutSection.jsx";
import HowThisWorksSection from "./sections/HowThisWorksSection.jsx";
import CalendarSection from "./sections/CalendarSection.jsx";
import TelegramBotSection from "./sections/TelegramBotSection.jsx"
import PastBooksSection from "./sections/PastBooksSection.jsx"
import WhatToDiscuss from "./sections/WhatToDiscuss.jsx"
import ActiveStreamsSection from "./sections/ActiveStreamsSection.jsx"
import CTASection from "./sections/CTASection.jsx"

function Page() {
    return (
        <main className="page-main">
            <AboutSection blueSection={false}/>
            <PastBooksSection blueSection={true} />
            <HowThisWorksSection blueSection={false}/>
            <WhatToDiscuss blueSection={true}/>
            <TelegramBotSection blueSection={false}/>
            <ActiveStreamsSection blueSection={true}/>
            <CalendarSection/>
            <CTASection blueSection={true}/>
        </main>
    )
}

export default Page
