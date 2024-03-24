import Hero from "@/components/team/Hero";
import TeamDisplay from "@/components/team/TeamDisplay";
import { consultants } from "@/data/Consultants";
import { executives } from "@/data/Executives";

function page() {
    return (
        <>
            <Hero />
            <TeamDisplay
                title="Executive Board"
                description="Responsible for the overall management and direction of the organization. They are responsible for the strategic direction of the organization and the day-to-day operations."
                teamArray={executives}
            />
            <TeamDisplay
                title="Consultants"
                description="Highly motivated and talented students from various majors and backgrounds, dedicated to providing the best consulting services to our clients."
                teamArray={consultants.sort((a, b) => a.name.localeCompare(b.name))}
            />
        </>
    );
}

export default page;
