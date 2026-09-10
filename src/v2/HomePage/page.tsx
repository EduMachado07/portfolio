import { AboutSection } from "./homepage_about";
import { ProjectsSection } from "./homepage_projects";
import { ContactSection } from "./homepage_contact";
import { GridBackground } from "./homepage_background";

export const HomePage = () => {
  return (
    <main className="flex flex-col flex-1 gap-18">
      <GridBackground>
        <div className="px-[22%]">
          <AboutSection />
        </div>
      </GridBackground>

      <ProjectsSection />

      <div className="px-[22%]">
        <ContactSection />
      </div>
    </main>
  );
};
