import Image from "next/image";
import { LayoutContent } from "../layout/layout-content";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-20 sticky top-0 right-0 left-0 z-10">
      <LayoutContent>
        <div className="flex justify-between h-20 items-center text-white">
          <Image
            width={300}
            height={40}
            alt="logo"
            src="/logo.svg"
            className="mb-2"
          />
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
