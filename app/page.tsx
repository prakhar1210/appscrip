import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import Topbar from "@/components/Topbar/Topbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Topbar />
      <Products />
      <Footer />
    </>
  );
}
