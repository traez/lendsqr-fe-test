import Image from "next/image";
import {
  arrayCustomers,
  arrayBusinesses,
  arraySettings,
} from "@/lib/dataCusBusSet";

const Navbar = () => {
  return (
    <nav className="navbar">
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

      <menu className="navbarmodal-logout">
        <div className="navbarmodal-logout-container">
          <Image
            src="/icon-logout.svg"
            alt="navbarmodal-logout"
            fill
            sizes="(min-width: 400px) 100vw"
            className="navbarmodal-logout"
          />
        </div>
        <span>Logout</span>
      </menu>
    </nav>
  );
};

export default Navbar;
