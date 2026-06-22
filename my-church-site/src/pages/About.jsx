import "./About.css";

const team = [
  { name: "Pastor Moses Ekhuemelo", role: "Senior Pastor", senior: true },
  { name: "Pastor Patricia Ekhuemelo", role: "Senior Pastor", senior: true },
  { name: "Pastor Owolabi", role: "Assistant Pastor", senior: false },
  { name: "Pastor Adebayo", role: "Assistant Pastor", senior: false },
  { name: "Andrew Dusu", role: "Youth Pastor", senior: false },
];

const beliefs = [
  { number: "01", title: "The Bible", desc: "We believe the Bible is the inspired, infallible Word of God and the ultimate authority for faith and life." },
  { number: "02", title: "Salvation", desc: "We believe in salvation through faith in Jesus Christ alone — that all who repent and believe are born again and become children of God." },
  { number: "03", title: "The Holy Spirit", desc: "We believe in the person and power of the Holy Spirit, who dwells in every believer and equips them for life and service." },
  { number: "04", title: "Jesus Christ", desc: "We believe Jesus Christ is the Son of God, who died for our sins, rose from the dead, and is Lord over all." },
  { number: "05", title: "The Church", desc: "We believe the Church is the body of Christ, called to worship God, grow together, and reach the world with the Gospel." },
  { number: "06", title: "Eternal Life", desc: "We believe in the resurrection of the dead and eternal life for all who believe in Jesus Christ as Lord and Saviour." },
];

export default function About() {
  return (
    <main className="aboutPage">

      {/* ── PAGE HERO ── */}
      <section className="pageHero">
        <div className="pageHeroBg" />
        <div className="pageHeroContent">
          <div className="pageHeroEyebrow">
            <span className="eyebrowLine" />
            Who We Are
            <span className="eyebrowLine" />
          </div>
          <h1 className="pageHeroH1">
            About <em>Destiny</em><br />International
          </h1>
        </div>
      </section>

      {/* ── INTRO QUOTE ── */}
      <section className="introSection">
        <p className="introQuote">
          "A people of Destiny with our feet and heart solidly anchored in the
          living word of God and our sublime faith rooted in our Triumphant
          Saviour — the Lord Jesus Christ."
        </p>
        <div className="goldDivider" />
      </section>

      {/* ── OUR STORY ── */}
      <section className="storySection">
        <div className="storyInner">
          <div className="storyText">
            <div className="sectionLabel">Our Story</div>
            <h2 className="storyH2">Rooted in Faith,<br />Growing in Purpose</h2>
            <p className="storyP">
              Destiny International Christian Assembly was founded in Birmingham
              with a singular vision — to build a community of believers firmly
              grounded in the Word of God and the love of Jesus Christ.
            </p>
            <p className="storyP">
              Over the years, DICA has grown into a vibrant, multicultural
              congregation that welcomes people from all walks of life. From our
              Sunday services to our midweek Bible studies, everything we do is
              centred on helping people discover and fulfil their God-given destiny.
            </p>
          </div>
          <div className="storyVisual">
            <span>Church photo coming soon</span>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="missionSection">
        <div className="missionInner">
          <div className="sectionLabel sectionLabelCentered">Our Purpose</div>
          <h2 className="missionH2">Mission &amp; Vision</h2>
          <div className="missionGrid">
            <div className="missionCard">
              <div className="missionIcon">🎯</div>
              <h3 className="missionCardH3">Our Mission</h3>
              <p className="missionCardP">
                To raise a generation of spirit-filled believers who are rooted
                in God's Word, empowered to live out their faith, and equipped
                to impact their communities for Christ.
              </p>
            </div>
            <div className="missionCard">
              <div className="missionIcon">👁️</div>
              <h3 className="missionCardH3">Our Vision</h3>
              <p className="missionCardP">
                To be a thriving, multicultural church that reflects the Kingdom
                of God — a place where every person can encounter Jesus, grow in
                their faith, and step into their God-given destiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE BELIEFS ── */}
      <section className="beliefsSection">
        <div className="beliefsInner">
          <div className="sectionLabel sectionLabelCentered sectionLabelLight">What We Believe</div>
          <h2 className="beliefsH2">Our Core Beliefs</h2>
          <div className="beliefsGrid">
            {beliefs.map(({ number, title, desc }) => (
              <div key={number} className="beliefCard">
                <div className="beliefNumber">{number}</div>
                <h4 className="beliefTitle">{title}</h4>
                <p className="beliefDesc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section className="teamSection">
        <div className="teamInner">
          <div className="sectionLabel sectionLabelCentered">The People Behind DICA</div>
          <h2 className="teamH2">Meet Our Leadership</h2>
          <p className="teamSub">Servant leaders committed to helping you grow in faith and purpose.</p>
          <div className="teamScroll">
            {team.map(({ name, role, senior }) => (
              <div key={name} className={`teamCard ${senior ? "teamCardSenior" : ""}`}>
                <div className="teamPhoto">
                  <span>Photo coming soon</span>
                </div>
                <div className="teamInfo">
                  <h3 className="teamName">{name}</h3>
                  <span className="teamRole">{role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
