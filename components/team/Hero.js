"use client";

function Hero() {
    return (
        <section className="bg-[url('/TeamPicture.webp')] bg-center bg-cover bg-opacity-40 pt-32 pb-14 md:pt-52 md:pb-32">
            <div className="max-w-screen-xl px-4 py-8 mx-auto flex flex-col md:items-center text-center text-white">
                <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none">Meet The Team</h1>
                <p className="max-w-2xl mb-4 font-light md:text-lg lg:text-xl">
                    CYC is an inclusive consultancy with a diverse, tight-knit team that prioritizes quality over quantity. We value individuals over numbers,
                    fostering lasting friendships through social events and retreats.
                </p>
            </div>
        </section>
    );
}

export default Hero;
