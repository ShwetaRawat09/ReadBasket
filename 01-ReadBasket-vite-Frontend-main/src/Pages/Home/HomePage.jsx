import { useTitle } from "../../Hooks/useTitle";
import { Hero } from "./Hero";
import { FeaturedProducts } from "./FeaturedProducts";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";

export const HomePage = () => {
  useTitle("Latest Books");

  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <FAQ />
    </main>
  )
}
