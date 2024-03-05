import Image from "next/image";

function AlumniCompanies() {
    return (
        <section className="bg-gray-50">
            <div class="py-8 lg:pt-16 lg:pb-12 mx-auto max-w-screen-xl px-4">
                <h2 class="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">You're in good company</h2>
                <h3 className="mb-6 md:w-8/12 mx-auto text-center text-gray-900 text-sm md:text-base">
                    Our alumni have gone on to work at some of the most prestigious companies in the world.
                </h3>
                <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
                    <Image src="/AlumniLogos/Google.svg" className="h-9" width="200" height="200" alt="Google" />
                    <Image src="/AlumniLogos/Amazon.svg" className="" width="200" height="200" alt="Amazon" />
                    <Image src="/AlumniLogos/JPMorgan.svg" className="" width="200" height="200" alt="Microsoft" />
                    <Image src="/AlumniLogos/Apple.svg" className="h-9" width="200" height="200" alt="Apple" />
                    <Image src="/AlumniLogos/JPMorgan.svg" className="h-9" width="200" height="200" alt="IBM" />
                    <Image src="/AlumniLogos/JPMorgan.svg" className="h-9" width="200" height="200" alt="LinkedIn" />
                </div>
            </div>
        </section>
    );
}

export default AlumniCompanies;
