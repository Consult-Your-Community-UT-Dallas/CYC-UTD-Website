"use client";

import Image from "next/image";
import { execTeam } from "@/data/ExecTeam";

function ExecTeamCard({ name, title, img, linkedin, major, gradYear, email }) {
    return (
        <div className="text-center text-gray-500">
            <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={img}
                alt={`${name} Avatar`}
                width={144}
                height={144}
                priority={false}
                placeholder="empty"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href={linkedin}>{name}</a>
            </h3>
            <p>{title}</p>
            <ul className="flex justify-center mt-4 space-x-4">
                <li>
                    <a href={linkedin} className="text-[#39569c] hover:text-gray-900">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href={email} className="text-[#00acee] hover:text-gray-900">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355
                                -.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
}

function Executive() {
    return (
        <div className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">The Executive Team</h2>
                <p className="font-light text-gray-500 sm:text-xl">
                    Responsible for the overall management and direction of the organization. They are responsible for the strategic direction of the
                    organization and the day-to-day operations.
                </p>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {execTeam.map((member, index) => (
                    <ExecTeamCard
                        key={index}
                        name={member.name}
                        title={member.title}
                        img={member.img}
                        linkedin={member.linkedin}
                        major={member.major}
                        gradYear={member.gradYear}
                        email={member.email}
                    />
                ))}
            </div>
        </div>
    );
}

export default Executive;
