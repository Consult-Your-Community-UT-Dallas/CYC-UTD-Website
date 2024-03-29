"use client";

import { useEffect } from "react";
import { businessFormLink, consultantFormLink } from "../../data/FormLinks";

function HeroButton({ href, buttonText }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
        >
            {buttonText}
        </a>
    );
}

function Hero() {
    // Hacky way to prevent serverless function from cold start
    useEffect(() => {
        fetch("/api/health");
    }, []);

    return (
        <section id="#" className="bg-[url('/Hero.webp')] bg-center bg-cover pt-28 pb-12 md:pt-44 md:pb-20">
            <div className="max-w-screen-xl px-4 py-8 mx-auto flex flex-col md:items-center text-center text-white">
                <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight">Consult Your Community</h1>
                <p className="max-w-2xl mb-4 font-light md:text-lg lg:text-xl">
                    Student-led UT Dallas organization that provides free consulting services to Dallas&apos;s small, minority-owned businesses and nonprofits.
                </p>
                <p className="max-w-2xl mb-6 font-light md:text-lg lg:text-xl">
                    With social impact at the heart of what we do, our members become not just consultants, but community leaders.
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <HeroButton href={businessFormLink} buttonText="Work With Us" />
                    <HeroButton href={consultantFormLink} buttonText="Become a Consultant" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
