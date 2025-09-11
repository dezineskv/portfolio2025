// components/HeroSection.js
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex h-[65vh] w-full items-center justify-center text-center">
      <Image
        src="https://i.ibb.co/HTkk7grJ/paint.webp"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 z-10 h-full bg-black opacity-20"></div>
      {/* Overlay */}
      <div className="z-20 p-8 text-gray-200">
        <h1 className="mb-4 text-5xl font-bold">Frontend Developer</h1>
        <p className="mb-8 text-xl">Building web apps, sites and features</p>
        <Link href="/projects">
          <button className="rounded-lg bg-background px-6 py-3 font-bold text-white hover:bg-blue-700">
            Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
