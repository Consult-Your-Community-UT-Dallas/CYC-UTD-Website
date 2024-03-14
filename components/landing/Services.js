"use client";

import { servicesData } from "@/data/Services";

function ServiceCard({ icon, title, description }) {
    return (
        <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">{icon}</div>
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    );
}

function Services() {
    return (
        <div id="services" className="py-20 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900">What We Offer</h2>
                <p className="text-gray-500 sm:text-lg">
                    Each semester, we undertake consulting projects with diverse clients, offering comprehensive services and data-driven insights to develop
                    high-quality business solutions.
                </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
}

export default Services;
