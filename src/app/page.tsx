import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import OurServices from "./components/OurServices";
import FeatureLists from "./components/FeatureLists";
import MarchentBanner from "./components/MarchentBanner";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";

export default function Home() {


  return (
    <div>
      <div>
        <Hero />
        <Works />
        <OurServices />
        <FeatureLists />
        <MarchentBanner />
        <Testimonial />
        <FAQ />
      </div>
    </div>
  );
}
