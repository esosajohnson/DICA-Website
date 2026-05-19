import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Sermons", to: "/sermons" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <div className="navTop">

        {/* LEFT — Logo */}
        <Link to="/" className="brand">
          <img src="/logo.png" alt="Destiny International Christian Assembly" style={{ height: "52px" }} />
        </Link>

        {/* RIGHT — Nav links */}
        <ul className="navLinks">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`navLink ${pathname === to ? "navLinkActive" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburgerLine" />
          <span className="hamburgerLine" />
          <span className="hamburgerLine" />
        </button>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Service times bar */}
      <div className="serviceBar">
        {[
          { label: "1st Service", detail: "Sunday 10:00am – 12:00pm" },
          { label: "2nd Service", detail: "Sunday 12:30pm – 2:30pm" },
          { label: "Bible Study", detail: "Wednesday 6:00pm" },
        ].map(({ label, detail }) => (
          <div key={label} className="serviceItem">
            <div className="serviceDot" />
            <span className="serviceLabel">{label}</span>
            <span className="serviceDetail">{detail}</span>
          </div>
        ))}
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobileMenu">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="mobileLink"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mobileSocials">
            {socials.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="socialBtn"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}