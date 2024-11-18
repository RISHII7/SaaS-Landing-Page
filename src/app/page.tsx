import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Features from "@/sections/Features";
import LogoTicker from "@/sections/LogoTicker";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
        </>
    );
}
