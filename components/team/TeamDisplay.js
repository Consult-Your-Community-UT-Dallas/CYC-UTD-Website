"use client";

import Image from "next/image";

function Member({ name, position, linkedin, major, gradYear, email }) {
    return (
        <div className="text-center text-gray-500">
            <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                //image name is firstnamelastname.jpeg
                src={`/Team/${name.split(" ")[0].toLowerCase()}${name.split(" ")[1].toLowerCase()}.jpeg`}
                alt={`${name} Avatar`}
                width={144}
                height={144}
                priority={false}
                placeholder="empty"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                <a href={linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    {name}
                </a>
            </h3>
            {position && <p>{position}</p>}
            <p className="pb-1">
                {major} {gradYear}
            </p>
            <a href={`mailto:${email}`} className="text-primary-500 hover:underline">
                Email
            </a>
        </div>
    );
}

function TeamDisplay({ title, description, teamArray }) {
    return (
        <div className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{title}</h2>
                <p className="font-light text-gray-500 sm:text-xl">{description}</p>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {teamArray
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((member, idx) => (
                        <Member key={idx} {...member} />
                    ))}
            </div>
        </div>
    );
}

export default TeamDisplay;
