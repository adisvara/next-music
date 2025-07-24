import Image from "next/image";
import { Appbar } from "./components/Appbar";
import { Hero } from "./components/Hero";
import { Raleway } from "next/font/google";
import Musicbar from "./components/Musicbar";

const raleway = Raleway({subsets:["latin"]})
export default function Home() {
  return (
    <main className={raleway.className}>
      <div className="bg-gradient-to-br from-[#141f7e] to-[#0c1875] h-screen">
        <Appbar/>
        <Hero/>
        <Musicbar/>
      </div>
     
    </main>
  );
}
