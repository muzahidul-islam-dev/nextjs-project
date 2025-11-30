import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";

export default function Home() {


  return (
    <div>
      <div>
        <Hero />
        <Works />
      </div>
    </div>
  );
}
