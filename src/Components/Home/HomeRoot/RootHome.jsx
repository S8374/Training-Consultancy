import Services from "../../Servises/Servise/Servise";
import EventTime from "../Shared/Body/EventTime/EventTime";
import Faq from "../Shared/Body/Faq/Faq";
import Servise from "../Shared/Body/Servise/Servise";
import Testimonals from "../Shared/Body/Testimonals/Testimonals";
import Hero from "../Shared/Hero/Hero";

export default function RootHome() {
    return (
        <div>
            
            <Hero />
            <Testimonals />
            <Services />
            <EventTime />
            <Servise />

            <Faq />
           
        </div>
    )
}
