import ContactPage from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { NavPage } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <NavPage/>
      <ContactPage/>
      <Footer/>
    </div>
    </>
  );
}
