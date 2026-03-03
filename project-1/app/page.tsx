import { main } from "motion/react-client";
import Image from "next/image";
import Herosection from "../components/Herosection"
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicTestimonial from "@/components/MusicTestimonial"
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
     <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0]">
      <Herosection></Herosection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs></WhyChooseUs>
      <MusicTestimonial></MusicTestimonial>
      <UpcomingWebinars></UpcomingWebinars>
      <Instructors></Instructors>
      <Footer></Footer>
     </main>
  );
}
