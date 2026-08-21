import Header from "./Header.jsx";
import Page from "./Page.jsx"
import Footer from "./Footer.jsx"
import AnnouncementBanner from "./AnnouncementBanner.jsx";


function Landing() {
    return (
        <div className="page">
            {/*<AnnouncementBanner />*/}
            <Header/>
            <Page/>
            <Footer/>
        </div>
    )
}

export default Landing
