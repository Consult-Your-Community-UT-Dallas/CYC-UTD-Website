"use client";

function Hero() {
    return (
        <section id="/#" className="bg-[url('/TeamPageHero.jpg')] bg-center bg-cover bg-opacity-40 pt-36 pb-20">
            <div className="max-w-screen-xl px-4 py-8 mx-auto flex flex-col md:items-center text-center text-white">
                <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none">Meet The Team</h1>
                <p className="max-w-2xl mb-4 font-light md:text-lg lg:text-xl">
                    CYC is an inclusive consultancy with a diverse team. We prioritize quality over quantity, keeping our organization small and our hierarchy
                    flat.
                </p>
                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
                    We value our members as individuals, not just numbers, and focus on building lasting friendships through social events and retreats. Join us
                    for impactful work and a fun, supportive community.
                </p>
            </div>
        </section>
    );
}

export default Hero;
