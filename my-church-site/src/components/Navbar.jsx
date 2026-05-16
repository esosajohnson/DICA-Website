import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Sermons", to: "/sermons" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@dicabrum",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2s-.3-1.9-1.1-2.7c-1-.8-2.2-.8-2.7-.9C16.8 2.5 12 2.5 12 2.5s-4.8 0-7.7.1c-.5.1-1.7.1-2.7.9C.8 4.3.5 6.2.5 6.2S.2 8.4.2 10.6v2.1c0 2.2.3 4.4.3 4.4s.3 1.9 1.1 2.7c1 .8 2.4.8 3 .9C6.7 20.9 12 21 12 21s4.8 0 7.7-.3c.5-.1 1.7-.1 2.7-.9.8-.8 1.1-2.7 1.1-2.7s.3-2.2.3-4.4v-2c0-2.3-.3-4.5-.3-4.5zm-13.9 9V8.8l7.3 3.2-7.3 3.2z"/></svg>,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@dicabrum",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 3.3A4.9 4.9 0 0 1 14.8 0h-3.6v16.4a2.9 2.9 0 0 1-2.9 2.5 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .5 0 .8.1V9.5a6.5 6.5 0 0 0-.8 0 6.5 6.5 0 0 0-6.5 6.5A6.5 6.5 0 0 0 8.3 22.5a6.5 6.5 0 0 0 6.5-6.5V8.1a8.4 8.4 0 0 0 4.9 1.6V6.1a4.9 4.9 0 0 1-3.1-2.8h3.2z"/></svg>,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dicabrum/",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.9a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/DestinyInternationalBirmingham/",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.9v2.2h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"/></svg>,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav style={styles.nav}>
      <div style={styles.navTop}>

        {/* LEFT — Nav links */}
        <ul style={styles.navLinks}>
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                style={{
                  ...styles.navLink,
                  ...(pathname === to ? styles.navLinkActive : {}),
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CENTRE — Logo */}
        <Link to="/" style={styles.brand}>
          {
            <img src="/logo.png" alt="Destiny International Christian Assembly" style={{ height: "52px" }} />
          }
        </Link>

        {/* RIGHT — Social icons + mobile hamburger */}
        <div style={styles.navRight}>
          {socials.map(({ name, url, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              style={styles.socialBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#B8975A";
                e.currentTarget.style.borderColor = "#B8975A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(184,151,90,0.25)";
                e.currentTarget.style.color = "#6B6459";
              }}
            >
              {icon}
            </a>
          ))}

          {/* Mobile hamburger */}
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={styles.hamburgerLine} />
            <span style={styles.hamburgerLine} />
            <span style={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider} />

      {/* Service times bar */}
      <div style={styles.serviceBar}>
        {[
          { label: "1st Service", detail: "Sunday 10:00am – 12:00pm" },
          { label: "2nd Service", detail: "Sunday 12:30pm – 2:30pm" },
          { label: "Bible Study", detail: "Wednesday 6:00pm" },
        ].map(({ label, detail }) => (
          <div key={label} style={styles.serviceItem}>
            <div style={styles.serviceDot} />
            <span style={styles.serviceLabel}>{label}</span>
            <span style={styles.serviceDetail}>{detail}</span>
          </div>
        ))}
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div style={styles.mobileSocials}>
            {socials.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialBtn}
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

const styles = {
  nav: {
    background: "#FAF7F2",
    borderBottom: "1px solid rgba(184,151,90,0.25)",
    fontFamily: "'Jost', sans-serif",
  },
  navTop: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    padding: "0 40px",
    height: "72px",
  },

  /* LEFT */
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    justifySelf: "start",
  },
  navLink: {
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#6B6459",
    textDecoration: "none",
    padding: "8px 14px",
    borderRadius: "4px",
  },
  navLinkActive: {
    color: "#B8975A",
  },

  /* CENTRE */
  brand: {
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  brandFallback: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2px",
  },
  brandName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "18px",
    fontWeight: 600,
    color: "#1C1A17",
    letterSpacing: "0.02em",
    lineHeight: 1,
  },
  brandSub: {
    fontSize: "9px",
    fontWeight: 300,
    color: "#B8975A",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  },

  /* RIGHT */
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifySelf: "end",
  },
  socialBtn: {
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    border: "1px solid rgba(184,151,90,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "#6B6459",
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    marginLeft: "4px",
  },
  hamburgerLine: {
    display: "block",
    width: "22px",
    height: "1.5px",
    background: "#1C1A17",
    borderRadius: "2px",
  },

  /* DIVIDER & SERVICE BAR */
  divider: {
    height: "1px",
    background: "linear-gradient(to right, transparent, rgba(184,151,90,0.3), transparent)",
    margin: "0 40px",
  },
  serviceBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "32px",
    padding: "8px 40px",
    background: "rgba(184,151,90,0.06)",
    flexWrap: "wrap",
  },
  serviceItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    color: "#6B6459",
  },
  serviceDot: {
    width: "4px",
    height: "4px",
    background: "#B8975A",
    borderRadius: "50%",
  },
  serviceLabel: {
    fontWeight: 500,
    color: "#1C1A17",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  serviceDetail: { fontSize: "12px" },

  /* MOBILE */
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    padding: "12px 24px 20px",
    borderTop: "1px solid rgba(184,151,90,0.15)",
  },
  mobileLink: {
    fontSize: "14px",
    color: "#6B6459",
    textDecoration: "none",
    padding: "10px 0",
    borderBottom: "1px solid rgba(184,151,90,0.1)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  mobileSocials: {
    display: "flex",
    gap: "8px",
    marginTop: "16px",
  },
};