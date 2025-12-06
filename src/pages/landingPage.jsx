import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
// Import your images
import headerImage from '../assets/market_banner.png';
import area1 from '../assets/marketimg/img1.jpeg';
import area2 from '../assets/marketimg/img2.jpeg';
import area3 from '../assets/marketimg/img3.jpeg';
import '../styles/landingpage.css';
import { Link } from "react-router-dom";

const features = [
  {
    icon: "🏪",
    title: "Available Shops",
    desc: "Modern shop spaces on highway for rent. Reserve your place in a growing marketplace."
  },
  {
    icon: "🚻",
    title: "Clean Facilities",
    desc: "Well-maintained washrooms and 24/7 clean drinking water for all tenants and customers."
  },
  {
    icon: "📍",
    title: "Prime Location",
    desc: "On the main highway near Depalpur, connecting rural commerce to major cities."
  }
];

const marketImages = [area1, area2, area3];

export default function LandingPage() {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const IMAGE_COUNT = marketImages.length;

  // Carousel Autoplay
  useEffect(() => {
    // Clear any previous timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % IMAGE_COUNT);
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, IMAGE_COUNT]);

  return (
    <div className="landing-container">
      <div style={{ textAlign: "right", margin: "0 0 6px 0" }}>
        <button
          className="lang-btn"
          onClick={() => i18n.changeLanguage('en')}
          disabled={i18n.language === 'en'}
        >ENGLISH</button>
        <button
          className="lang-btn"
          style={{marginLeft: 10}}
          onClick={() => i18n.changeLanguage('hi')}
          disabled={i18n.language === 'hi'}
        >हिंदी</button>
      </div>
      <header className="landing-header">
        <img src={headerImage} alt="Gurudev Market" className="market-banner" />
        <div className="overlay">
          <h1>{t("header.welcome")}</h1>
          <p className="tagline">{t("landingPage.tagline")}</p>
          <Link to="/contact" className="cta-btn">{t("landingPage.book_shop")}</Link>
        </div>
      </header>

      <section className="features-section">
        <h2>{t("landingPage.why_choose")}</h2>
        <div className="features-list">
          <div className="feature-card">
            <div className="feature-icon">🏪</div>
            <h3>{t("landingPage.available_shops")}</h3>
            <p>{t("landingPage.modern_shop_desc")}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚻</div>
            <h3>{t("landingPage.clean_facilities")}</h3>
            <p>{t("landingPage.clean_facilities_desc")}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>{t("landingPage.prime_location")}</h3>
            <p>{t("landingPage.prime_location_desc")}</p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="market-gallery">
        <h2>{t("landingPage.explore_market")}</h2>
        <div className="native-carousel-outer">
          <div className="native-carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
            {marketImages.map((img, idx) => (
              <div className="native-carousel-slide" key={idx}>
                <img src={img} alt={`Marketplace area ${idx + 1}`} />
              </div>
            ))}
          </div>
          <div className="native-carousel-dots">
            {marketImages.map((_, idx) =>
              <button
                key={idx}
                className={`dot${current === idx ? " active" : ""}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )}
          </div>
        </div>
      </section>

      <section className="about-market">
        <h2>{t("landingPage.about_market_title")}</h2>
        <p>{t("landingPage.about_market_desc")}</p>
      </section>

      <section className="cta-section" id="contact">
        <h2>{t("landingPage.interested_booking")}</h2>
        <p>{t("landingPage.contact_today")}</p>
        <Link to="/contact" className="cta-btn">{t("footer.contact_us")}</Link>
      </section>

      <footer className="landing-footer">
        <div>🏢 &nbsp; {t("landingPage.footer_address")}</div>
        <div>📞 &nbsp; {t("landingPage.footer_phone")} &nbsp; | &nbsp; {t("landingPage.footer_copyright")}</div>
      </footer>
    </div>
  );
}
