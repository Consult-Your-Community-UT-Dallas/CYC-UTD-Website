"use client";

import Image from "next/image";

const companies = [
    {
        name: "Facebook",
        logo: "/AlumniCompanies/Facebook.svg",
    },
    {
        name: "Allianz",
        logo: "/AlumniCompanies/Allianz.svg",
    },
    {
        name: "Deloitte",
        logo: "/AlumniCompanies/Deloitte.svg",
    },
    {
        name: "Google",
        logo: "/AlumniCompanies/Google.svg",
    },
    {
        name: "JPMorgan",
        logo: "/AlumniCompanies/JPMorgan.svg",
    },
    {
        name: "Microsoft",
        logo: "/AlumniCompanies/Microsoft.svg",
    },
];

function AlumniCompanyCard({ name, logo }) {
    return (
        <div className="flex justify-center items-center">
            <Image src={logo} alt={name} width={200} height={200} />
        </div>
    );
}

function AlumniCompanies() {
    return (
        <section className="bg-gray-50">
            <div className="py-8 lg:pt-16 lg:pb-12 mx-auto max-w-screen-xl px-4 space-y-8">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">You&apos;re in good company</h2>
                <h3 className="mb-6 md:w-8/12 mx-auto text-center text-gray-500 text-sm md:text-base">
                    Our alumni have gone on to work at some of the most prestigious companies in the world.
                </h3>
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
                    {companies.map((company, index) => (
                        <AlumniCompanyCard key={index} {...company} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AlumniCompanies;
