import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main style={{ fontFamily: "'Jost', sans-serif", color: "#1C1A17" }}>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="heroBg" />
        <div className="heroLines" />
        <div className="heroContent">
          <div className="heroEyebrow">
            <span className="eyebrowLine" />
            Birmingham · Est. 2003
            <span className="eyebrowLine" />
          </div>
          <h1 className="heroH1">
            Where Faith<br />Meets <em style={{ color: "#B8975A", fontStyle: "italic" }}>Family</em>
          </h1>
          <p className="heroSub">
            Destiny International Christian Assembly — A community rooted in God's Word
          </p>
          <div className="heroButtons">
            <Link to="/about" className="btnPrimary">Join Us Sunday</Link>
            <a
              href="https://www.youtube.com/@dicabrum"
              target="_blank"
              rel="noopener noreferrer"
              className="btnOutline"
            >
              ▶ Watch Online
            </a>
          </div>
        </div>
        <div className="heroScroll">
          <div className="scrollLine" />
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</span>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section className="welcomeOuter">
        <div className="welcome">
          <div>
            <div className="sectionLabel">Welcome Home</div>
            <h2 className="welcomeH2">A Place to Belong, Grow &amp; Worship</h2>
            <p className="welcomeP">
              Whether you're exploring faith for the first time or looking for a church family
              to grow with, you're welcome here. At Destiny International, we believe in the
              power of community, the truth of God's Word, and the joy of worshipping together.
            </p>
            <Link to="/about" className="btnDark">Learn About Us</Link>
          </div>
          <div className="welcomeVisual">
            <div className="welcomeCross">
              <div className="ring1" />
              <div className="ring2" />
              <div className="ring3" />
              <div className="crossV" />
              <div className="crossH" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE TIMES ── */}
      <section className="services">
        <div className="servicesInner">
          <div className="sectionLabel sectionLabelCentered" style={{ color: "#B8975A" }}>Join Us</div>
          <h2 className="sectionTitleLight">Service Times</h2>
          <div className="servicesGrid">
            {[
              { day: "Sunday", name: "1st Service", time: "10:00am – 12:00pm", icon: "🕙" },
              { day: "Sunday", name: "2nd Service", time: "12:30pm – 2:30pm", icon: "🕧" },
              { day: "Wednesday", name: "Bible Study", time: "6:00pm", icon: "📖" },
            ].map(({ day, name, time, icon }) => (
              <div key={name} className="serviceCard">
                <div className="serviceIcon">{icon}</div>
                <div className="serviceDay">{day}</div>
                <h3 className="serviceCardH3">{name}</h3>
                <div className="serviceTime">{time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST SERMON ── */}
      <section className="sermonOuter">
        <div className="sermonInner">
          <div className="sermonVideo">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed?listType=user_uploads&list=dicabrum"
              title="Latest Sermon"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="sermonInfo">
            <div className="sectionLabel">Latest Message</div>
            <h2 className="sermonH2">Watch Our Most Recent Sermon</h2>
            <p className="sermonP">
              Catch up on our latest message from Destiny International. New sermons
              are uploaded every week to our YouTube channel.
            </p>
            <Link to="/sermons" className="btnDark">View All Sermons</Link>
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="eventsOuter">
        <div className="eventsInner">
          <div className="sectionLabel sectionLabelCentered">What's On</div>
          <h2 className="sectionTitleDark sectionLabelCentered">Upcoming Events</h2>
          <div className="eventsGrid">
            {[
              {
                month: "May", day: "18",
                title: "Sunday Worship Service",
                desc: "Join us for a powerful time of worship, prayer and the Word of God.",
                tag: "Weekly",
              },
              {
                month: "May", day: "21",
                title: "Wednesday Bible Study",
                desc: "Midweek deep dive into the scriptures. All are welcome.",
                tag: "Weekly",
              },
            ].map(({ month, day, title, desc, tag }) => (
              <div key={title} className="eventCard">
                <div className="eventDate">
                  <div className="eventMonth">{month}</div>
                  <div className="eventDay">{day}</div>
                </div>
                <div>
                  <h3 className="eventTitle">{title}</h3>
                  <p className="eventDesc">{desc}</p>
                  <span className="eventTag">{tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/events" className="btnDark">View All Events</Link>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="mapOuter">
        <div className="mapInner">
          <div className="sectionLabel sectionLabelCentered">Find Us</div>
          <h2 className="sectionTitleDark sectionLabelCentered">We're in Birmingham</h2>
          <div className="mapContainer">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1258242.5208628806!2d-2.329754777347841!3d51.97945003922629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bcea0fe53001%3A0xad5c44643d406ce9!2sChurch!5e0!3m2!1sen!2suk!4v1778500989774!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </main>
  );
}