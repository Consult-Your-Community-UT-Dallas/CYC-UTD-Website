const questionsLeftColumn = [
    {
        question: "What does CYC look for in an applicant?",
        answer: "CYC believes that the best applicants aren’t necessarily the ones with an inherent business acumen, but instead, display a commitment to pro-bono, impactful work while simultaneously showing willingness to learn more. More specifically, the main traits we look for are collaborative efforts, enthusiasm, and intellectual curiosity.",
    },
    {
        question: "How can I prepare before submitting my application?",
        answer: "For the best chance, ensure your resume is comprehensive. Consider using our template and Harvard Business School guide. If applicable, use the optional section to explain extenuating circumstances. We prioritize an equitable recruitment process. Attend our info sessions and coffee chats before submitting your application for a better understanding.",
    },
    {
        question: "How can I prepare going into my interview?",
        answer: "Prepare for your CYC interview by focusing on your major-specific knowledge. For computer science majors, expect technical questions, while business majors may encounter market sizing and business frameworks. The first round includes a group case interview, emphasizing collaboration and confidence. The final round's case structure mirrors the first, but it's a chance to showcase your passions, commitment to empowering underserved communities, and why CYC resonates with you.",
    },
];

const questionsRightColumn = [
    {
        question: "What makes CYC different from other Consulting Clubs?",
        answer: "What sets CYC UTD apart is its focus on pro-bono consulting for local, minority-owned businesses. Our diverse projects, spanning financial modeling to UI/UX design, provide Analysts with a chance to make a tangible impact on community issues while honing a wide range of skills, making CYC unique and impactful for both members and businesses.",
    },
    {
        question: "What time commitment is expected from members?",
        answer: "CYC's New Members undergo weekly New Member Education (NME) training, lasting 1-2 hours. Alongside this, they dedicate around four extra hours for general meets, project team meetings, assignments, and socials. CYC recommends a minimum commitment of six hours per week for optimal engagement.",
    },
    {
        question: "What major should I be to join CYC?",
        answer: "CYC prides itself on the diverse interests and skills of our members, and we believe that the best consultants are ones that can leverage their skills— regardless of what they are— to drive impact. Majors are not considered when selecting applicants, and CYC highly encourages students to apply regardless of what they are currently studying.",
    },
];

function QuestionCard({ question, answer }) {
    return (
        <div class="mb-10">
            <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                {question}
            </h3>
            <p class="text-gray-500">{answer}</p>
        </div>
    );
}

function FAQ() {
    return (
        <section class="bg-gray-50">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">Frequently asked questions</h2>
                <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
                    <div>
                        {questionsLeftColumn.map((question, index) => (
                            <QuestionCard key={index} question={question.question} answer={question.answer} />
                        ))}
                    </div>
                    <div>
                        {questionsRightColumn.map((question, index) => (
                            <QuestionCard key={index} question={question.question} answer={question.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
