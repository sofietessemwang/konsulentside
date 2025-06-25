import Footer from "@/components/Footer";
import ContactForm from "@/components/form";
import FrontPicture from "@/components/home/FrontPicture";
import TextBoxes from "@/components/home/TextBoxes";
import Navbar from "@/components/Navbar";
import { EmailFormProvider } from "@/context/EmailFormContext";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <EmailFormProvider>
      <ContactForm />
      <Navbar />
      <FrontPicture />
      <TextBoxes />
      <div className="h-100 py-40 text-center text-8xl">
        halla
        <p className="text-2xl">
          avsnitt om tjenestene han tilbyr, med overskrift som salg,
          markedsføring. helst mye space da nettsiden trenger det

        </p>
        
      </div>
      <Footer/>
      </EmailFormProvider>
    </>
  );
}
