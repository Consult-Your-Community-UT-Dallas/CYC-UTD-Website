import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import CallToAction from "@/components/CallToAction";
import AlumniCompanies from "@/components/AlumniCompanies";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="space-y-12">
            <Hero />
            <Services />
            <SocialProof />
            <Testimonials />
            <AlumniCompanies />
            <CallToAction />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}
