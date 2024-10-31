"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    router.push("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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
                  src="/magnifying-glass.png"
                  alt="magnifying-glass"
                  fill
                  sizes="(min-width: 400px) 100vw"
                  className="icon-magnifying-glass"
                />
              </div>
            </button>
          </form>
          <aside>aside2</aside>
        </menu>
        <div onClick={toggleMenu} className="header-icon-container">
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
