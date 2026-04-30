import './Page.css'
import AboutSection from "./sections/AboutSection.jsx";
import HowToJoinSection from "./sections/HowToJoinSection.jsx";
import CalendarSection from "./sections/CalendarSection.jsx";

function Page() {
    return (
        <main className="page-main">
            <AboutSection/>
            <HowToJoinSection/>
            <CalendarSection/>
        </main>
    )
}

export default Page
