"use client";

import Image from "next/image";
import { consultants } from "@/data/Consultants";
import { executives } from "@/data/Executives";

export const companies = [
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
            <Image src={logo} alt={name} width={1000} height={1000} priority={true} placeholder="empty" />
        </div>
    );
}

function AlumniCompanies() {
    return (
        <section id="team" className="bg-gray-50">
            <div className="py-20 mx-auto max-w-screen-xl px-4 space-y-6">
                <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-center md:text-4xl">You&apos;re in good company</h2>
                <h3 className="md:w-8/12 mx-auto text-center text-gray-500 text-sm md:text-base">
                    Our alumni have gone on to work at some of the most prestigious companies in the world.
                </h3>
                <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
                    {companies.map((company, index) => (
                        <AlumniCompanyCard key={index} {...company} />
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0">
                    <div className="flex justify-center">
                        {consultants.slice(0, 5).map((member, index) => (
                            <Image
                                src={`/Team/${member.name.split(" ")[0]}${member.name.split(" ")[1]}.jpeg`}
                                alt={member.name}
                                width={1000}
                                height={1000}
                                className={`w-12 h-12 rounded-full ${index !== 0 ? "-ml-4" : ""}`}
                                key={index}
                            />
                        ))}
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center -ml-4">
                            <span className="text-white">+{consultants.length + executives.length - 5}</span>
                        </div>
                    </div>
                    <a
                        href="/team"
                        className="w-45 mx-auto md:mx-5 inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Meet the Team
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AlumniCompanies;
