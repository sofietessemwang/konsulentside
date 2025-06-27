import Footer from "@/components/Footer";
import ContactForm from "@/components/form";
import Carousel from "@/components/home/Carousel";
import FrontPicture from "@/components/home/FrontPicture";
import Services from "@/components/home/Services";
import TextBoxes from "@/components/home/TextBoxes";
import Navbar from "@/components/Navbar";
import { EmailFormProvider } from "@/context/EmailFormContext";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <EmailFormProvider>
        <ContactForm />
        <Navbar />
        <main className="flex-1">
          <FrontPicture />
          <TextBoxes />
          <Services />
          <Carousel/>
        </main>
        <Footer />
      </EmailFormProvider>
    </div>
  );
}
