import FrontPicture from "@/components/home/FrontPicture";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <FrontPicture />
      <div className="h-44">hei igjen</div>
    </>
  );
}
