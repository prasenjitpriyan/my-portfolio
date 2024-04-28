import Advantage from "@/components/Advantage";
import HomePage from "@/components/Home";
import Hr from "@/components/Hr";
import NavbarMain from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <NavbarMain />
      <HomePage />
      <Hr />
      <Advantage />
      <Hr />
    </main>
  );
}
