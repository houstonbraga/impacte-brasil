import Image from "next/image";
import { LayoutContent } from "../layout/layout-content";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-primary-green h-20 sticky">
      <LayoutContent>
        <div className="flex justify-between h-20 items-center text-white">
          <Image width={300} height={40} alt="logo" src="/logo.svg" className="mb-2"/>
          <div className="flex gap-9">
            <Link href="/">Home</Link>
            <Link href="/about">Sobre</Link>
            <Link href="/solutions">Soluções</Link>
            <Link href="/events">Eventos</Link>
            <Link href="/contacts">Contatos</Link>
          </div>
        </div>
      </LayoutContent>
    </div>
  );
};

export default Header;
