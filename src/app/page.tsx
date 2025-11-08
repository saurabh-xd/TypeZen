import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";


export default function Home() {
  return (
    <div className="bg-neutral-950">
     <Navbar />
     <Hero/>
     <Features/>
     <Testimonials/>
   
     
   
</div>
  );
}
