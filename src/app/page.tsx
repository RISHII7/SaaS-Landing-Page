import Faqs from "@/sections/Faqs";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Features from "@/sections/Features";
import LogoTicker from "@/sections/LogoTicker";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
            <Faqs />
            <CallToAction />
            <Footer />
        </>
    );
}
