import { AboutSection } from "./homepage_about";
import { ProjectsSection } from "./homepage_projects";
import { ContactSection } from "./homepage_contact";

export const HomePage = () => {
  return (
    <main className="flex flex-col flex-1 gap-12 sm:gap-16 lg:gap-18">
        <div className="px-[6%] md:px-[22%]">
          <AboutSection />
        </div>

      <ProjectsSection />

      <div className="px-[6%] md:px-[22%]">
        <ContactSection />
      </div>
    </main>
  );
};
