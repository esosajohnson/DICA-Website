import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@dicabrum",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2s-.3-1.9-1.1-2.7c-1-.8-2.2-.8-2.7-.9C16.8 2.5 12 2.5 12 2.5s-4.8 0-7.7.1c-.5.1-1.7.1-2.7.9C.8 4.3.5 6.2.5 6.2S.2 8.4.2 10.6v2.1c0 2.2.3 4.4.3 4.4s.3 1.9 1.1 2.7c1 .8 2.4.8 3 .9C6.7 20.9 12 21 12 21s4.8 0 7.7-.3c.5-.1 1.7-.1 2.7-.9.8-.8 1.1-2.7 1.1-2.7s.3-2.2.3-4.4v-2c0-2.3-.3-4.5-.3-4.5zm-13.9 9V8.8l7.3 3.2-7.3 3.2z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@dicabrum",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.6 3.3A4.9 4.9 0 0 1 14.8 0h-3.6v16.4a2.9 2.9 0 0 1-2.9 2.5 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .5 0 .8.1V9.5a6.5 6.5 0 0 0-.8 0 6.5 6.5 0 0 0-6.5 6.5A6.5 6.5 0 0 0 8.3 22.5a6.5 6.5 0 0 0 6.5-6.5V8.1a8.4 8.4 0 0 0 4.9 1.6V6.1a4.9 4.9 0 0 1-3.1-2.8h3.2z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dicabrum/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.9a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/DestinyInternationalBirmingham/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.9v2.2h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Sermons", to: "/sermons" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

const services = [
  { name: "1st Service", time: "Sunday 10:00am – 12:00pm" },
  { name: "2nd Service", time: "Sunday 12:30pm – 2:30pm" },
  { name: "Bible Study", time: "Wednesday 6:00pm" },
];

export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* Gold top bar */}
      <div style={styles.goldBar} />

      {/* Main footer content */}
      <div style={styles.footerTop}>
        {/* Brand column */}
        <div style={styles.brandCol}>
          <div style={styles.brandName}>
            Destiny International<br />Christian Assembly
          </div>
          <div style={styles.brandSub}>Birmingham</div>
          <p style={styles.brandDesc}>
            A welcoming community of believers rooted in faith, love, and the
            Word of God. All are welcome.
          </p>
          <div style={styles.socialLinks}>
            {socialLinks.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                aria-label={name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#B8975A";
                  e.currentTarget.style.borderColor = "#B8975A";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(184,151,90,0.06)";
                  e.currentTarget.style.borderColor = "rgba(184,151,90,0.3)";
                  e.currentTarget.style.color = "rgba(250,247,242,0.7)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.col}>
          <h4 style={styles.colHeading}>Quick Links</h4>
          <ul style={styles.colList}>
            {quickLinks.map(({ label, to }) => (
              <li key={to} style={styles.colItem}>
                <Link
                  to={to}
                  style={styles.colLink}
                  onMouseEnter={(e) => (e.target.style.color = "#B8975A")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(250,247,242,0.6)")
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div style={styles.col}>
          <h4 style={styles.colHeading}>Services</h4>
          <ul style={styles.colList}>
            {services.map(({ name, time }) => (
              <li key={name} style={{ ...styles.colItem, marginBottom: "14px" }}>
                <span style={styles.serviceName}>{name}</span>
                <span style={styles.serviceTime}>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div style={styles.col}>
          <h4 style={styles.colHeading}>Get In Touch</h4>
          <ul style={styles.colList}>
            <li style={styles.colItem}>
              <a href="/contact" style={styles.colLink}>📍 Birmingham, UK</a>
            </li>
            <li style={styles.colItem}>
              <a href="mailto:info@dicabrum.org" style={styles.colLink}>
                ✉️ info@dicabrum.org
              </a>
            </li>
            <li style={styles.colItem}>
              <a
                href="https://www.youtube.com/@dicabrum"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.colLink}
              >
                ▶️ Watch Online
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={styles.footerBottom}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Destiny International Christian Assembly.
          All rights reserved.
        </p>
        <div style={styles.bottomLinks}>
          <a href="#" style={styles.bottomLink}>Privacy Policy</a>
          <a href="#" style={styles.bottomLink}>Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#1C1A17",
    color: "#FAF7F2",
    fontFamily: "'Jost', sans-serif",
    textAlign: "center",
  },
  goldBar: {
    height: "3px",
    background:
      "linear-gradient(to right, transparent, #B8975A, #D4B07A, #B8975A, transparent)",
  },
  footerTop: {
    display: "grid",
    gridTemplateColumns: "1.8fr 1fr 1fr 1.2fr",
    gap: "48px",
    padding: "64px 5% 48px",
    borderBottom: "1px solid rgba(184,151,90,0.2)",
  },
  brandCol: {},
  brandName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    fontWeight: 600,
    color: "#fff",
    lineHeight: 1.2,
    marginBottom: "4px",
  },
  brandSub: {
    fontSize: "10px",
    color: "#B8975A",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  brandDesc: {
    fontSize: "13px",
    color: "rgba(250,247,242,0.6)",
    lineHeight: 1.7,
    marginBottom: "24px",
    maxWidth: "320px",
    marginLeft : "auto",
    marginRight : "auto"
  },
  socialLinks: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  socialLink: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    border: "1px solid rgba(184,151,90,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    background: "rgba(184,151,90,0.06)",
    color: "rgba(250,247,242,0.7)",
    transition: "all 0.2s",
    cursor: "pointer",
  },
  col: {},
  colHeading: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#B8975A",
    marginBottom: "20px",
  },
  colList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  colItem: {
    marginBottom: "10px",
  },
  colLink: {
    fontSize: "13px",
    color: "rgba(250,247,242,0.6)",
    textDecoration: "none",
    letterSpacing: "0.02em",
    transition: "color 0.2s",
  },
  serviceName: {
    display: "block",
    fontSize: "11px",
    fontWeight: 500,
    color: "rgba(250,247,242,0.9)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  serviceTime: {
    display: "block",
    fontSize: "12px",
    color: "rgba(250,247,242,0.45)",
    marginTop: "1px",
  },
  footerBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 60px",
    flexWrap: "wrap",
    gap: "12px",
  },
  copyright: {
    fontSize: "12px",
    color: "rgba(250,247,242,0.35)",
    letterSpacing: "0.04em",
  },
  bottomLinks: {
    display: "flex",
    gap: "20px",
  },
  bottomLink: {
    fontSize: "12px",
    color: "rgba(250,247,242,0.35)",
    textDecoration: "none",
  },
};
