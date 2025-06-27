import { Card } from "@/components/Card";
import CardDetails from "@/components/Card/CardDetails";
import Presentation from "@/components/Presentation";
import { Projects } from "@/lib/projects";

const Index = () => {
    return (
        <main className="flex flex-col gap-8 pb-16">
            {/* PRESENTATION */}
            <Presentation />

            {/* PROJECTS */}
            <h1 className="text-[#3399FF] font-chubbo-bold text-2xl">Projetos</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Projects.slice(0, 4).map((item, index) => (
                    <Card.Root key={index}>
                        <Card.Image img={item.img} />
                        <CardDetails
                            type={item.type}
                            title={item.title}
                            description={item.description}
                            linkProject={item.linkProject}
                        />
                    </Card.Root>
                ))}
            </section>
        </main>
    );
};

export default Index;
