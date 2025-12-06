import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/ShopCard.css";

export default function ShopCard({ shop }) {
  const { t } = useTranslation();

  return (
    <div className={`shop-card ${shop.isAvailable ? 'available' : 'occupied'}`}>
      <div className="shop-header">
        <h3>{t("shops.shop_label")} #{shop.shopNumber}</h3>
        <span className={`status-badge ${shop.isAvailable ? 'available' : 'occupied'}`}>
          {shop.isAvailable ? `🟢 ${t("shops.available")}` : `🔴 ${t("shops.occupied")}`}
        </span>
      </div>

      <div className="shop-details">
        <div className="detail-row">
          <span className="detail-label">{t("shops.size")}:</span>
          <span className="detail-value">{shop.size} {shop.sizeUnit}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">{t("shops.area")}:</span>
          <span className="detail-value">{shop.area} {t("shops.sq_ft")}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">{t("shops.rent")}:</span>
          <span className="detail-value rent-value">₹{shop.rent.toLocaleString()}/{t("shops.month")}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">{t("shops.type")}:</span>
          <span className="detail-value">{t(`shops.type_${shop.type}`)}</span>
        </div>
      </div>

      {shop.features.length > 0 && (
        <div className="shop-features">
          {shop.features.map((feature, idx) => (
            <span key={idx} className="feature-tag">
              ✨ {t(`shops.feature_${feature}`)}
            </span>
          ))}
        </div>
      )}

      {shop.isAvailable ? (
        <Link 
          to={`/contact?shop=${shop.shopNumber}&size=${shop.size}`} 
          className="shop-cta-btn available-btn"
        >
          {t("shops.inquire_now")}
        </Link>
      ) : (
        <div className="occupied-info">
          <span className="occupied-label">{t("shops.occupied_by")}:</span>
          <span className="occupied-business">{shop.occupiedBy}</span>
        </div>
      )}
    </div>
  );
}
