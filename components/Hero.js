// TODO: Replace button hrefs with actual links
import Image from "next/image";

function Hero() {
    return (
        <section className="bg-gray-50">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="place-self-center lg:col-span-8">
                    <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none">
                        Consult Your <span className="bg-gradient-to-r from-orange-500 to-blue-500 text-transparent bg-clip-text">Community</span>
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                        UT Dallas CYC chapter provides free tech consulting, specializing in full-stack development, data science, analytics, and database
                        design for local small businesses and startups.
                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button
                            href="#" // Replace this
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                        >
                            Work With Us
                        </button>
                        <button
                            href="#" // Replace this
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100"
                        >
                            Become a Consultant
                        </button>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-4 lg:flex">
                    <Image src="HeroImage.svg" alt="Hero Image" width={400} height={400} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
