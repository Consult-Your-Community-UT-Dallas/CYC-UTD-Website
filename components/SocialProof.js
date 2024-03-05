import React from "react";

function SocialProof() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-screen-xl px-4 py-12 mx-auto text-center lg:py-24 lg:px-6">
                <dl className="grid gap-12 mx-auto text-gray-900 sm:grid-cols-4">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">350+</dt>
                        <dd className="font-light text-gray-500">Consultants Nationwide</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">100+</dt>
                        <dd className="font-light text-gray-500">Clients per Year</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">25,000+</dt>
                        <dd className="font-light text-gray-500">Hours of Pro-Bono Counsel</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">30+</dt>
                        <dd className="font-light text-gray-500">Chapters</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}

export default SocialProof;
