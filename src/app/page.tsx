import Navbar from "./components/Navbar"
import GreetingNike from "./components/GreetingNike"
import Hero from "./components/Hero"
import Carousel from "./components/Carousel"
import Featured from "./components/Featured"
import GearUp from "./components/GearUp"
import DontMiss from "./components/DontMiss"
import Essential from "./components/Essential"
import AllLinks from "./components/AllLinks"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <div>
      <Navbar />
      <GreetingNike />
      <Hero />
      <Carousel />
      <Featured />
      <GearUp />
      <DontMiss />
      <Essential />
      <AllLinks />
      <Footer />
    </div>
  );
}
