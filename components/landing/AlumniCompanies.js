"use client";

import Image from "next/image";
import { companies } from "@/data/AlumniCompanies";

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
            <div className="py-12 md:py-24 mx-auto max-w-screen-xl px-4 space-y-8">
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
