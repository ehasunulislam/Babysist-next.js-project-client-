import AllNanny from "@/components/Home/All-Nanis/AllNanny";
import Care from "@/components/Home/Care/Care";
import Header from "@/components/Home/Header/Header";
import Safety from "@/components/Home/Safety/Safety";

export default function Home() {
  return (
    <div>
      <Header />
      <Care />
      <Safety />
      <AllNanny />
    </div>
  );
}
