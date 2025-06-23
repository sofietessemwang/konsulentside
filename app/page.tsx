import FrontPicture from "@/components/home/FrontPicture";
import TextBoxes from "@/components/home/TextBoxes";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <FrontPicture />
      <TextBoxes />
      <div className="h-100 py-40 text-center text-8xl">halla</div>
    </>
  );
}
