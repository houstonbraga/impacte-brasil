import Image from "next/image";
import { LayoutContent } from "../layout/layout-content";
import Link from "next/link";

const Footer = () => {
  return (
    <LayoutContent className="mt-24 mb-12">
      <footer className="flex flex-col gap-14">
        <div className="w-full flex justify-start">
          <Image
            src="/logofooter.svg"
            alt="logofooter"
            width={300}
            height={39}
          />
        </div>
        <div className="w-full flex gap-6">
          <Link href="/">
            <Image
              width={32}
              height={32}
              src="/LinkedinLogo.svg"
              alt="Linkedin"
            />
          </Link>
          <Link href="/">
            <Image
              width={32}
              height={32}
              src="/InstagramLogo.svg"
              alt="Linkedin"
            />
          </Link>
          <Link href="/">
            <Image
              width={32}
              height={32}
              src="/YoutubeLogo.svg"
              alt="Linkedin"
            />
          </Link>
        </div>
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col justify-start">
            <h2 className="mb-4 text-2xl font-normal">Ecossistema</h2>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="mb-4 text-2xl font-normal">Ecossistema</h2>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="mb-4 text-2xl font-normal">Ecossistema</h2>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="mb-4 text-2xl font-normal">Ecossistema</h2>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
              <Link href="/" className="text-gray-400 text-xl">
                Sobre nós
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start">
          <p className="text-xl">© 2025 Impacte brasil.</p>
        </div>
      </footer>
    </LayoutContent>
  );
};

export default Footer;
