import AllNanny from "@/components/Home/All-Nanis/AllNanny";
import Care from "@/components/Home/Care/Care";
import Header from "@/components/Home/Header/Header";
import ParentsLove from "@/components/Home/Parents-Love/ParentsLove";
import Safety from "@/components/Home/Safety/Safety";

export default function Home() {
  return (
    <div>
      <Header />
      <Care />
      <Safety />
      <AllNanny />
      <ParentsLove />
    </div>
  );
}
