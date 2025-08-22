import Hero from "./home/page";
import Service from "./mediServices/page";
import FeatureProducts from "./featureProducts/page";
import Articals from "./article/page";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <FeatureProducts />
      <Articals/>
              <Footer/>

    </>
  );
}
