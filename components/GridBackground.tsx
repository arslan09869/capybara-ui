import { cn } from "@/lib/utils";
// import Spline from "@splinetool/react-spline";
import { BorderButton } from "./BorderBtn";
import { NavbarDemo } from "./FloatingNavbar";
import Image from "next/image";
import { CanvasRevealEffectTestimonialCard } from "./TestimonialCard";
import FAQSection from "./FAQs";
import Footer from "./Footer";
import { Playwrite_DE_SAS } from "next/font/google";
import ConcentricDots from "./ConcentricDots";
import SketchedButton from "./SketchedButton";
import ThreeDCarousel from "./3DCarousel";
import RotatingEarth from "./rotating-earth";

const font = Playwrite_DE_SAS({
  weight: ["400"],
});

export function GridBackground() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-white dark:bg-black overflow-hidden">
      {/* Navbar */}
      <div className="fixed top-2 left-0 right-0 z-50">
        <NavbarDemo />
      </div>

      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial Fade */}
      <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(circle,transparent_10%,black)]"></div>

      {/* HERO CONTENT */}
      <div className="w-full flex items-center sm:gap-12 gap-8 px-6 sm:px-12 lg:px-24 py-24 relative z-20">
        {/* Left */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl leading-tight bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
            Capybara
            <br />
            Component Library
          </h1>

          <p className="text-zinc-700 dark:text-zinc-300 text-center lg:text-left text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            Build premium-quality UIs instantly with beautiful and reusable
            components — just plug and play.
          </p>

          <div className="flex justify-center lg:justify-start gap-x-12">
            <BorderButton title={"Explore components"} />
            <BorderButton title={"Join the Capybara UI"} />
          </div>
        </div>

        {/* Right */}
        <div className="w-full hidden lg:block lg:w-1/2 h-[300px] sm:h-[380px] md:h-[520px] relative">
          <div className="absolute top-20">
            <ConcentricDots />
          </div>

          <img src="/1000055686-Photoroom.png" alt="img" className="absolute" />
        </div>
      </div>

      <section className="relative z-20 w-full px-6 sm:px-12 lg:px-24 py-3 sm:py-16 space-y-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl leading-tight bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
              Pre-built Templates Included
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto md:mx-0 text-base">
              Speed up your workflow with stunning production-ready templates
              for dashboards, authentication, subscription pages, and more.
            </p>

            <div className="flex justify-center md:justify-start mt-4">
              <BorderButton title="Explore Templates" />
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-2/3">
            <div className="overflow-hidden ">
              <Image
                src="/templates/original-ec60f19f5095bf65a5d58a39b02effdc.png"
                width={1200}
                height={800}
                alt="Templates Preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Canvas Reveal Card */}
        <div className="flex-col items-center w-full">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl leading-tight bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
              Loved by Developers & Designers
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-base">
              Hear what people are saying about Capybara and how it boosts their
              productivity.
            </p>
          </div>
          <CanvasRevealEffectTestimonialCard />
        </div>

        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-5xl leading-tight bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-base">
            Everything you need to know about Capybara — answered clearly.
          </p>

          {/* FAQ Component */}
          <div className="w-full mt-10">
            <FAQSection />
          </div>
        </div>
        <div className="w-full mt-10">
          <Footer />
        </div>
        {/* <RotatingEarth width={700} height={500}/> */}
      </section>
    </div>
  );
}
