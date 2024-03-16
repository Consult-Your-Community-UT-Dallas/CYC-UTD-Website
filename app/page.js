import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import SocialProof from "@/components/landing/SocialProof";
import Testimonials from "@/components/landing/Testimonials";
import AlumniCompanies from "@/components/landing/AlumniCompanies";
import CallToAction from "@/components/landing/CallToAction";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";

export default function Home() {
    // fetch health to wake up the api server from cold start

    return (
        <>
            <Hero />
            <Services />
            <SocialProof />
            <Testimonials />
            <AlumniCompanies />
            <FAQ />
            <CallToAction />
            <Contact />
        </>
    );
}
