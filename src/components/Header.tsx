"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { StateContext } from "@/lib/StateProvider";

const Header = () => {
  const router = useRouter();
  const { toggleModalState, isMenuOpen } = useContext(StateContext)!;

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className="header-div">
      <div className="header-logo-lendsqr-container" onClick={handleLogoClick}>
        <Image
          src="/logo-lendsqr.svg"
          alt="logo-lendsqr"
          fill
          sizes="(min-width: 400px) 100vw"
          className="header-logo-lendsqr"
        />
      </div>
      <nav className="header-nav">
        <menu className="header-nav-menu">
          <form className="header-nav-menu-form">
            <input
              type="text"
              id="search"
              placeholder="Search for anything"
              className="header-nav-menu-form-input"
            />
            <button
              type="submit"
              className="header-nav-menu-form-button"
              aria-label="Search"
            >
              <div className="icon-magnifying-glass-container">
                <Image
                  src="/icon-header-magnifying-glass.png"
                  alt="magnifying-glass"
                  fill
                  sizes="(min-width: 400px) 100vw"
                  className="icon-magnifying-glass"
                />
              </div>
            </button>
          </form>
          <aside className="header-nav-menu-aside">
            <div className="header-nav-menu-aside-docs">Docs</div>
            <div className="header-nav-menu-aside-bell-container">
              <Image
                src="/icon-header-bell.png"
                alt="header-nav-menu-aside-bell"
                fill
                sizes="(min-width: 400px) 100vw"
                className="header-nav-menu-aside-bell"
              />
            </div>
            <div className="header-nav-menu-aside-adedeji-container">
              <Image
                src="/icon-header-adedeji.png"
                alt="header-nav-menu-aside-adedeji"
                fill
                sizes="(min-width: 400px) 100vw"
                className="header-nav-menu-aside-adedeji"
              />
            </div>
            <span className="header-nav-menu-aside-span">
              <div className="header-nav-menu-aside-div-adedeji">Adedeji</div>
              <div className="header-nav-menu-aside-dd-container">
                <Image
                  src="/icon-header-dd.svg"
                  alt="header-nav-menu-aside-dd"
                  fill
                  sizes="(min-width: 400px) 100vw"
                  className="header-nav-menu-aside-dd"
                />
              </div>
            </span>
          </aside>
        </menu>
        <div onClick={toggleModalState} className="header-icon-container">
          {isMenuOpen ? (
            <TfiClose size="30px" />
          ) : (
            <RxHamburgerMenu size="30px" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
