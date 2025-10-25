import Header from "@/components/common/header";

import styles from "./styles.module.css";
import Image from "next/image";
import HeroContent from "@/components/hero-content";
import Button from "@/components/common/button";
import Results from "@/components/results";

const HomePage = () => {
  return (
    <>
      <div className={`flex flex-col w-full relative ${styles.bgGradientHero}`}>
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
          className={`opacity-40 ${styles.bgImage}`}
          priority={true}
        />
        <div className="z-10 my-auto">
          <HeroContent />
        </div>
      </div>
      <div
        className={`${styles.bgGradientHeroSecondary} h-[400px] flex justify-center items-center`}
      >
        <div className="text-white">
          <p className="text-left max-w-[480px] text-xl">
            Juntos, enfrentamos gargalos reais, aceleramos decisões e
            construímos soluções completas e integradas para transformar o
            varejo supermercadista de forma prática e contínua.
          </p>
          <Button text="Tire suas dúvidas"/>
        </div>
        <div>
          <Image
            src="/logo-orbit.png"
            width={600}
            height={600}
            alt="logo orbita"
          />
        </div>
      </div>
      <Results />
    </>
  );
};

export default HomePage;
