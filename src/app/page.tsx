import Advantage from "@/components/Advantage";
import Carousels from "@/components/Carousels";
import Education from "@/components/Education";
import HomePage from "@/components/Home";
import Hr from "@/components/Hr";
import LatestProjects from "@/components/LatestProjects";
import NavbarMain from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <NavbarMain />
      <HomePage />
      <Hr />
      <Advantage />
      <Hr />
      <Education />
      <Hr />
      <LatestProjects />
      <Hr />
      <Carousels />
      <Hr />
    </main>
  );
}
