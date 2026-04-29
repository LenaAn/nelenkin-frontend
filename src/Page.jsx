import './Page.css'
import AboutSection from "./AboutSection.jsx";
import HowToJoinSection from "./HowToJoinSection.jsx";
import CalendarSection from "./CalendarSection.jsx";

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
