import './Page.css'
import AboutSection from "./AboutSection.jsx";
import HowToJoinSection from "./HowToJoinSection.jsx";

function Page() {
    return (
        <main className="page-main">
            <AboutSection/>
            <HowToJoinSection/>
        </main>
    )
}

export default Page
