import { Layout } from "@/components/layout";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceTimeline } from "@/components/experience-timeline";

export default function ProjectsPage() {
  return (
    <Layout>
      <ProjectsSection />
      <ExperienceTimeline />
    </Layout>
  );
}
