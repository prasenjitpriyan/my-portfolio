import HomePage from "@/components/Home";
import NavbarMain from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <NavbarMain />
      <HomePage />
      <hr />
    </main>
  );
}
