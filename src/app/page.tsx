import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProjects } from "@/components/featured-projects";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
    </Layout>
  );
}
