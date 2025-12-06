import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ShopCard from "../components/ShopCard/ShopCard";
import { shops, marketFacilities, getAvailableShopsCount, getTotalShopsCount } from "../data/shops";
import "../styles/Shops.css";

export default function Shops() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all"); // all, available, occupied

  const filteredShops = shops.filter(shop => {
    if (filter === "available") return shop.isAvailable;
    if (filter === "occupied") return !shop.isAvailable;
    return true;
  });

  return (
    <div className="shops-container">
      {/* Hero Section */}
      <section className="shops-hero">
        <h1>{t("shops.page_title")}</h1>
        <p className="shops-subtitle">
          {getAvailableShopsCount()} {t("shops out of ")} {getTotalShopsCount()} {t("shops.shops_available")}
        </p>
        <div className="rent-highlight">
          {t("shops.starting_at")} <span className="rent-amount">₹5,000/{t("shops.month")}</span>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <h3>{t("shops.filter_by")}:</h3>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            {t("shops.filter_all")} ({shops.length})
          </button>
          <button
            className={`filter-btn ${filter === "available" ? "active" : ""}`}
            onClick={() => setFilter("available")}
          >
            🟢 {t("shops.filter_available")} ({getAvailableShopsCount()})
          </button>
          <button
            className={`filter-btn ${filter === "occupied" ? "active" : ""}`}
            onClick={() => setFilter("occupied")}
          >
            🔴 {t("shops.filter_occupied")} ({getTotalShopsCount() - getAvailableShopsCount()})
          </button>
        </div>
      </section>

      {/* Shops Grid */}
      <section className="shops-grid">
        {filteredShops.map(shop => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </section>

      {filteredShops.length === 0 && (
        <div className="no-results">
          <p>{t("shops.no_shops_found")}</p>
        </div>
      )}

      {/* Market Facilities Section */}
      <section className="facilities-section">
        <h2>{t("shops.facilities_title")}</h2>
        <p className="facilities-subtitle">{t("shops.facilities_subtitle")}</p>
        <div className="facilities-grid">
          {marketFacilities.map(facility => (
            <div key={facility.id} className="facility-card">
              <span className="facility-icon">{facility.icon}</span>
              <span className="facility-name">{t(`shops.facility_${facility.key}`)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="shops-cta">
        <h2>{t("shops.cta_title")}</h2>
        <p>{t("shops.cta_subtitle")}</p>
        <div className="cta-buttons">
          <a href="/contact" className="cta-primary">
            {t("shops.contact_us")}
          </a>
          <a href="tel:+919754265265" className="cta-secondary">
            📞 {t("shops.call_now")}
          </a>
        </div>
      </section>
    </div>
  );
}
