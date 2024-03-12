"use client";

import Image from "next/image";

const testimonials = [
    {
        title: "Game-changer for my solo venture",
        quote: (
            <>
                <p className="my-4">
                    &quot;Thanks to CYC&apos;s student volunteers, my online store and social media strategy got a significant boost last summer. Working with a
                    dedicated team was a game-changer for my solo venture at Postscript San Francisco.
                </p>
                <p className="my-4">I highly recommend CYC for their innovative solutions and collaborative approach. Huge thanks!&quot;</p>
            </>
        ),
        avatar: "/Testimonials/ChandlerTang.jpeg",
        linkedInProfile: "https://www.linkedin.com/in/chandler-tang-1a63a7aa/",
        name: "Chandler Tang",
        position: "Founder of post.script.",
    },
    {
        title: "My dream has become a reality",
        quote: (
            <>
                <p className="my-4">
                    &quot;The CYC team turned my solo venture into a thriving community site. With their guidance, I clarified my message, collaborated with
                    talented interns, and underwent a transformative website redesign.
                </p>
                <p className="my-4">Now, with three websites and a growing membership, my dream has become a reality. Grateful for the support!&quot;</p>
            </>
        ),
        avatar: "/Testimonials/JillianLivingston.jpeg",
        linkedInProfile: "https://www.linkedin.com/in/jillianlivingston/",
        name: "Jillian Livingston",
        position: "Executive Director / Founder of Aspen's Professional Social Club & Global Travel Writer",
    },
    {
        title: "Strengthened our community ties",
        quote: (
            <>
                <p className="my-4">
                    &quot;To stand out in the cycling world, trust is crucial. Thanks to CYC, we refined our customer care, creating lasting connections.
                </p>
                <p className="my-4">
                    As a small business owner, I value supporting local enterprises and, with CYC&apos;s help, we&apos;ve strengthened our community ties,
                    expanding our reach and impact.&quot;
                </p>
            </>
        ),
        avatar: "/Testimonials/LaurieLemieux.png",
        linkedInProfile: "https://www.linkedin.com/in/laurie-lemieux-202811126/",
        name: "Laurie Lemieux",
        position: "President at Proteus Bicycles",
    },
    {
        title: "Invaluable support for businesses",
        quote: (
            <>
                <p className="my-4">
                    &quot;I joined CYC due to my parents&apos; small business challenges. CYC&apos;s mission resonated with me as we faced difficulties without
                    knowing where to seek help.
                </p>
                <p className="my-4">
                    Immigrant-owned businesses, like my parents&apos;, often struggle to adapt, and CYC&apos;s regional insights could have been invaluable for
                    tailored guidance.&quot;
                </p>
            </>
        ),
        avatar: "/Testimonials/AnneChen.jpeg",
        linkedInProfile: "https://www.linkedin.com/in/annevirginiachen/",
        name: "Anne Virginia Chen",
        position: "Former Consultant at CYC Columbia",
    },
];

function TestimonialCard({ title, quote, avatar, linkedInProfile, name, position }) {
    return (
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                {quote}
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
                <Image className="w-9 h-9 rounded-full" src={avatar} alt="profile picture" width={100} height={100} />
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
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
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
