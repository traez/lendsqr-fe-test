"use client";
import { useContext } from "react";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import { StateContext } from "@/lib/StateProvider";
import { arrayCustomers, arrayBusinesses, arraySettings } from "@/lib/data";

const NavbarModal = () => {
  const { toggleModalState } = useContext(StateContext)!;

  return (
    <nav className="navbarmodal-overlay">
      <article className="navbarmodal-content">
        <TfiClose
          size="21px"
          onClick={toggleModalState}
          className="navbarmodal-togglex"
        />

        <form className="">
          <input type="text" id="search" placeholder="Search for anything" />
          <button
            type="submit"
            className="header-nav-menu-form-button"
            aria-label="Search"
          >
            <div>
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

        <aside className="navbarmodal-aside">
          <div className="navbarmodal-aside-docs">Docs</div>
          <div className="navbarmodal-aside-bell-container">
            <Image
              src="/icon-header-bell.png"
              alt="navbarmodal-aside-bell"
              fill
              sizes="(min-width: 400px) 100vw"
              className="navbarmodal-aside-bell"
            />
          </div>
          <div className="navbarmodal-aside-adedeji-container">
            <Image
              src="/icon-header-adedeji.png"
              alt="navbarmodal-aside-adedeji"
              fill
              sizes="(min-width: 400px) 100vw"
              className="navbarmodal-aside-adedeji"
            />
          </div>
          <span className="navbarmodal-aside-span">
            <div className="navbarmodal-aside-div-adedeji">Adedeji</div>
            <div className="navbarmodal-aside-dd-container">
              <Image
                src="/icon-header-dd.svg"
                alt="navbarmodal-aside-dd"
                fill
                sizes="(min-width: 400px) 100vw"
                className="navbarmodal-aside-dd"
              />
            </div>
          </span>
        </aside>

        <menu className="navbarmodal-switcho">
          <div className="navbarmodal-switcho-brief-container">
            <Image
              src="/icon-switch-briefcase.svg"
              alt="navbarmodal-switcho-brief"
              fill
              sizes="(min-width: 400px) 100vw"
              className="navbarmodal-switcho-brief"
            />
          </div>
          <span>Switch Organization</span>
          <div className="navbarmodal-switcho-dd-container">
            <Image
              src="/icon-switch-v-dropdown.svg"
              alt="navbarmodal-switcho-dd"
              fill
              sizes="(min-width: 400px) 100vw"
              className="navbarmodal-switcho-dd"
            />
          </div>
        </menu>

        <menu className="navbarmodal-dashboardh">
          <div className="navbarmodal-dashboard-house-container">
            <Image
              src="/icon-dashboard-house.svg"
              alt="navbarmodal-dashboard-house"
              fill
              sizes="(min-width: 400px) 100vw"
              className="navbarmodal-dashboard-house"
            />
          </div>
          <span>Dashboard</span>
        </menu>

        <menu className="navbarmodal-customers">
          <span>CUSTOMERS</span>
          <ul>
            {arrayCustomers.map(({ icon, customer }) => (
              <li key={icon}>
                <div className="navbarmodal-customers-container">
                  <Image
                    src={`/${icon}`}
                    alt={`navbarmodal-customers-icon-${customer.toLowerCase()}`}
                    fill
                    sizes="(min-width: 400px) 100vw"
                    className="navbarmodal-customers-icon"
                  />
                </div>
                <b>{customer}</b>
              </li>
            ))}
          </ul>
        </menu>

        <menu className="navbarmodal-businesses">
          <span>BUSINESSES</span>
          <ul>
            {arrayBusinesses.map(({ icon, business }) => (
              <li key={icon}>
                <div className="navbarmodal-businesses-container">
                  <Image
                    src={`/${icon}`}
                    alt={`navbarmodal-businesses-icon-${business.toLowerCase()}`}
                    fill
                    sizes="(min-width: 400px) 100vw"
                    className="navbarmodal-businesses-icon"
                  />
                </div>
                <b>{business}</b>
              </li>
            ))}
          </ul>
        </menu>

        <menu className="navbarmodal-settings">
          <span>SETTINGS</span>
          <ul>
            {arraySettings.map(({ icon, setting }) => (
              <li key={icon}>
                <div className="navbarmodal-settings-container">
                  <Image
                    src={`/${icon}`}
                    alt={`navbarmodal-settings-icon-${setting.toLowerCase()}`}
                    fill
                    sizes="(min-width: 400px) 100vw"
                    className="navbarmodal-settings-icon"
                  />
                </div>
                <b>{setting}</b>
              </li>
            ))}
          </ul>
        </menu>

      </article>
    </nav>
  );
};

export default NavbarModal;
