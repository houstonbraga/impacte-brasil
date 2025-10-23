import Header from "@/components/common/header";

import styles from "./styles.module.css";
import Image from "next/image";
import HeroContent from "@/components/hero-content";

const HomePage = () => {
  return (
    <>
      <div
        className={`flex flex-col w-full relative overflow-hidden bg-primary-green ${styles.bgGradient}`}
      >
        <Header />
        <Image
          alt="bg hero"
          fill={true}
          src="/photohero.webp"
          className={`opacity-5 ${styles.bgImage}`}
          priority={true}
        />
        <Image
          alt="bg hero"
          fill={true}
          src="/gridhome.svg"
          className={`opacity-30 ${styles.bgImage}`}
          priority={true}
        />
        <div className="z-10 my-auto">
          <HeroContent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
