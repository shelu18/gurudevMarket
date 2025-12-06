import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/Location.css";

export default function Location() {
  const { t } = useTranslation();
  
  // Gurudev Market location coordinates: 22.802674, 75.550519
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3678.4523!2d75.5479!3d22.8027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ4JzA5LjYiTiA3NcKwMzMnMDEuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";
  
  const address = "Gurudev Market, Jalodiya Panth Betma Road, Depalpur";
  const googleMapsLink = "https://maps.google.com/?q=22.802674,75.550519";

  return (
    <section className="location-section">
      <div className="location-container">
        <h2>{t("location.find_us")}</h2>
        <p className="location-subtitle">{t("location.visit_us")}</p>

        <div className="location-content">
          <div className="location-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>{t("location.address")}</h3>
                <p>{address}</p>
                <a 
                  href={googleMapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="directions-btn"
                >
                  {t("location.get_directions")} →
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <div className="info-details">
                <h3>{t("location.timing")}</h3>
                <p>{t("location.open_daily")}</p>
                <p className="timing-hours">9:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h3>{t("location.contact")}</h3>
                <p><a href="tel:+919754265265">+91-9754265265</a></p>
                <p><a href="mailto:gurudevmarket555@gmail.com">gurudevmarket555@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="location-map">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gurudev Market Location"
            ></iframe>
          </div>
        </div>

        <div className="nearby-landmarks">
          <h3>{t("location.nearby_landmarks")}</h3>
          <div className="landmarks-grid">
            
            <div className="landmark-item">🏫 {t("location.school")}: 500 m</div>
            
            <div className="landmark-item">🚌 {t("location.bus_stand")}: 1 km</div>
          </div>
        </div>
      </div>
    </section>
  );
}
