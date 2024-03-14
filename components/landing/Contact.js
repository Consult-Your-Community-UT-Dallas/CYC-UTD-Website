"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: event.target.email.value,
                    subject: event.target.subject.value,
                    message: event.target.message.value,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            toast.success("Message sent!", { position: "bottom-right" });
        } catch (error) {
            console.log(error);
            toast.error("Feature under development", { position: "bottom-right" });
        }
    };

    return (
        <div id="contact" className="py-20 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
            <p className="mb-8 font-light text-center text-gray-500 sm:text-xl">
                Have a question or want to learn more about our services? Send us a message and we&apos;ll get back to you as soon as possible.
            </p>
            <p className="mb-8 font-light text-center text-gray-500 sm:text-xl">
                You can also reach us at{" "}
                <a href="mailto:utdallas@consultyourcommunity.org" className="text-primary-700 hover:underline">
                    utdallas@consultyourcommunity.org
                </a>
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="john.doe@gmail.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Let us know how we can help you"
                        required
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows="6"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Leave a comment..."
                    />
                </div>
                <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                    Send message
                </button>
                <ToastContainer />
            </form>
        </div>
    );
}

export default Contact;
