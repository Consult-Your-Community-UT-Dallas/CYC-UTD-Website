function TestimonialCard({ title, quote, avatar, linkedIn, name, position }) {
    return (
        <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 class="text-lg font-semibold text-gray-900">{title}</h3>
                {quote}
            </blockquote>
            <figcaption class="flex justify-center items-center space-x-3">
                <img class="w-9 h-9 rounded-full" src={avatar} alt="profile picture" />
                <div class="space-y-0.5 font-medium text-left">
                    <a href={linkedIn} target="_blank" rel="noreferrer" class="text-gray-900 hover:underline">
                        {name}
                    </a>
                    <div class="text-sm font-light text-gray-500">{position}</div>
                </div>
            </figcaption>
        </figure>
    );
}

function Testimonials() {
    return (
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Impact</h2>
                <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
                    Our clients' success stories are a testament to the impact of our work. We are proud to have helped local businesses grow and thrive.
                </p>
            </div>
            <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
                <TestimonialCard
                    title="Game-changer for my solo venture"
                    quote={
                        <>
                            <p class="my-4">
                                "Thanks to CYC's student volunteers, my online store and social media strategy got a significant boost last summer. Working with
                                a dedicated team was a game-changer for my solo venture at Postscript San Francisco.
                            </p>
                            <p class="my-4">I highly recommend CYC for their innovative solutions and collaborative approach. Huge thanks!"</p>
                        </>
                    }
                    avatar="/Testimonials/ChandlerTang.jpeg"
                    linkedIn={"https://www.linkedin.com/in/chandler-tang-1a63a7aa/"}
                    name="Chandler Tang"
                    position="Founder of post.script."
                />
                <TestimonialCard
                    title="My dream has become a reality"
                    quote={
                        <>
                            <p class="my-4">
                                "The CYC team turned my solo venture into a thriving community site. With their guidance, I clarified my message, collaborated
                                with talented interns, and underwent a transformative website redesign.
                            </p>
                            <p class="my-4">Now, with three websites and a growing membership, my dream has become a reality. Grateful for the support!"</p>
                        </>
                    }
                    avatar="/Testimonials/JillianLivingston.jpeg"
                    linkedIn={"https://www.linkedin.com/in/jillianlivingston/"}
                    name="Jillian Livingston"
                    position="Executive Director / Founder of Aspen's Professional Social Club & Global Travel Writer"
                />
                <TestimonialCard
                    title="Strengthened our community ties"
                    quote={
                        <>
                            <p class="my-4">
                                "To stand out in the cycling world, trust is crucial. Thanks to CYC, we refined our customer care, creating lasting connections.
                            </p>
                            <p class="my-4">
                                As a small business owner, I value supporting local enterprises and, with CYC's help, we've strengthened our community ties,
                                expanding our reach and impact."
                            </p>
                        </>
                    }
                    avatar="/Testimonials/LaurieLemieux.png"
                    linkedIn={"https://www.linkedin.com/in/laurie-lemieux-202811126/"}
                    name="Laurie Lemieux"
                    position="President at Proteus Bicycles"
                />
                <TestimonialCard
                    title="Invaluable support for businesses"
                    quote={
                        <>
                            <p class="my-4">
                                "I joined CYC due to my parents' small business challenges. CYC's mission resonated with me as we faced difficulties without
                                knowing where to seek help.
                            </p>
                            <p class="my-4">
                                Immigrant-owned businesses, like my parents', often struggle to adapt, and CYC's regional insights could have been invaluable
                                for tailored guidance."
                            </p>
                        </>
                    }
                    avatar="/Testimonials/AnneChen.jpeg"
                    linkedIn={"https://www.linkedin.com/in/annevirginiachen/"}
                    name="Anne Virginia Chen"
                    position="Former Consultant at CYC Columbia"
                />
            </div>
        </div>
    );
}

export default Testimonials;
