"use client";

import Image from "next/image";
import { testimonials } from "@/data/Testimonials";

function TestimonialCard({ title, quote, linkedInProfile, name, position }) {
    return (
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                {quote}
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
                <Image
                    className="w-9 h-9 rounded-full"
                    src={`/Testimonials/${name.split(" ")[0]}${name.split(" ")[name.split(" ").length - 1]}.jpeg`}
                    alt={`${name} Profile Picture`}
                    width={100}
                    height={100}
                />
                <div className="space-y-0.5 font-medium text-left">
                    <a href={linkedInProfile} target="_blank" rel="noreferrer" className="text-gray-900 hover:underline">
                        {name}
                    </a>
                    <div className="text-sm font-light text-gray-500">{position}</div>
                </div>
            </figcaption>
        </figure>
    );
}

function Testimonials() {
    return (
        <div className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:px-6">
            <div className="mx-auto max-w-screen-sm">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Testimonials</h2>
                <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
                    Our clients and volunteers share their experiences working with CYC and the impact our services have had on their personal and professional
                    lives.
                </p>
            </div>
            <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
