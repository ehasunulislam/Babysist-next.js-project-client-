import AllNanny from "@/components/Home/All-Nanis/AllNanny";
import Care from "@/components/Home/Care/Care";
import DownloadApps from "@/components/Home/Download-Apps/DownloadApps";
import Header from "@/components/Home/Header/Header";
import Last from "@/components/Home/Last/Last";
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
      <DownloadApps />
      <Last />
    </div>
  );
}
