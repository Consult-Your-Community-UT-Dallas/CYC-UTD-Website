"use client";

import { socialProofs } from "@/data/SocialProof";

function SocialProofCard({ metric, description }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">{metric}</dt>
            <dd className="font-light text-gray-500">{description}</dd>
        </div>
    );
}

function SocialProof() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-screen-xl px-4 py-12 mx-auto text-center lg:py-24 lg:px-6">
                <dl className="grid gap-12 mx-auto text-gray-900 sm:grid-cols-4">
                    {socialProofs.map((socialProof, index) => (
                        <SocialProofCard key={index} {...socialProof} />
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default SocialProof;
