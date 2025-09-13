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
        className="z-0 opacity-75"
      />
      <div className="absolute inset-0 z-10 h-full bg-black opacity-20"></div>
      {/* Overlay */}
      <div className="z-20 p-8 text-gray-200">
        <h1 className="mb-2 text-4xl font-bold">I'm Kim</h1>
        <div className="text-gray-200 text-xl font-bold">
          Frontend Developer
        </div>
        <p className="mb-8 text-gray-200 text-xl font-bold">
          Building web apps, sites and features
        </p>
        <Link href="/projects">
          <button className="rounded-lg bg-background px-6 py-3 font-bold text-gray-200 hover:bg-blue-700">
            Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
