import { useState } from "react";
import IconHamburger from "../components/svgs/icon-hamburger";
import IconClose from "../components/svgs/icon-close";

const NavbarLink = ({ text }: { text: string }) => {
  return (
    <a
      className={`
        relative before:absolute before:-bottom-1 before:left-0 before:right-0 
        before:mx-auto before:w-[70%] before:h-[.125rem] before:bg-white
        before:duration-[500ms] before:opacity-0 hover:before:opacity-100
      `}
      href="#"
    >
      {text}
    </a>
  );
};

enum MENU_STATE {
  OPEN = 'open',
  CLOSE = 'close',
}

const Navbar = () => {
  const [menuState, setMenuState] = useState<MENU_STATE>(MENU_STATE.CLOSE);

  const toggleMenu = () => {
    setMenuState((prev) => {
      if (prev === MENU_STATE.CLOSE) {
        document.body.style.overflowY = 'hidden';
        return MENU_STATE.OPEN
      } else {
        document.body.style.overflowY = 'auto';
        return MENU_STATE.CLOSE
      }
    })
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="absolute left-6 top-12 block sm:hidden z-30">
        {
          menuState === MENU_STATE.CLOSE ?
            <IconHamburger />
            : <IconClose />
        }
      </button>

      <div className={`absolute top-0 let-0 bg-black/70 h-screen w-full transition-opacity ${menuState === MENU_STATE.CLOSE ? "-z-10 opacity-0" : "z-20 opacity-100"}`}></div>

      <header className={`
        absolute flex items-center justify-end pr-6 sm:pr-0 h-28 sm:left-[11rem] sm:top-[3.75rem] sm:w-fit sm:h-fit z-20 overflow-clip sm:overflow-visible
        ${menuState === MENU_STATE.CLOSE ?
          "w-0 sm:w-fit"
          : "w-full sm:w-fit bg-white"
        }
      `}>
        <nav className="flex gap-8 text-black  sm:text-white">
          <NavbarLink text="home" />
          <NavbarLink text="shop" />
          <NavbarLink text="about" />
          <NavbarLink text="cotact" />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
