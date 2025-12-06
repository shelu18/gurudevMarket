import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getAvailableShops } from "../data/shops";
import "../styles/BookShop.css";

export default function BookShop() {
  const { t } = useTranslation();
  const availableShops = getAvailableShops();
  
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    mobile: "",
    businessType: "",
    shopPreference: "any",
    preferredSize: "any",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = t("bookshop.error_name");
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = t("bookshop.error_mobile");
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/[-()\s]/g, ""))) {
      newErrors.mobile = t("bookshop.error_mobile_invalid");
    }
    
    if (!formData.businessType.trim()) {
      newErrors.businessType = t("bookshop.error_business");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Create WhatsApp message
      const shopInfo = formData.shopPreference !== "any" 
        ? `Shop: ${formData.shopPreference}` 
        : "Any available shop";
      
      const message = `🏪 *Shop Booking Inquiry*\n\n` +
        `👤 Name: ${formData.fullName}\n` +
        `📍 Address: ${formData.address || "Not provided"}\n` +
        `📱 Mobile: ${formData.mobile}\n` +
        `💼 Business Type: ${formData.businessType}\n` +
        `🏬 ${shopInfo}\n` +
        `📏 Preferred Size: ${formData.preferredSize === "any" ? "Any size" : formData.preferredSize}\n` +
        `💬 Message: ${formData.message || "None"}`;
      
      const whatsappUrl = `https://wa.me/919754265265?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          fullName: "",
          address: "",
          mobile: "",
          businessType: "",
          shopPreference: "any",
          preferredSize: "any",
          message: ""
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="bookshop-page">
      <div className="bookshop-hero">
        <h1>{t("bookshop.title")}</h1>
        <p>{t("bookshop.subtitle")}</p>
        <div className="availability-badge">
          🎉 {availableShops.length} {t("bookshop.shops_available")}
        </div>
      </div>

      <div className="bookshop-container">
        <div className="bookshop-content">
          <div className="bookshop-info">
            <h2>{t("bookshop.why_book")}</h2>
            
            <div className="info-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">💰</span>
                <div>
                  <h3>{t("bookshop.benefit_affordable")}</h3>
                  <p>{t("bookshop.benefit_affordable_desc")}</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <span className="benefit-icon">📍</span>
                <div>
                  <h3>{t("bookshop.benefit_location")}</h3>
                  <p>{t("bookshop.benefit_location_desc")}</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <span className="benefit-icon">⚡</span>
                <div>
                  <h3>{t("bookshop.benefit_facilities")}</h3>
                  <p>{t("bookshop.benefit_facilities_desc")}</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <span className="benefit-icon">🤝</span>
                <div>
                  <h3>{t("bookshop.benefit_support")}</h3>
                  <p>{t("bookshop.benefit_support_desc")}</p>
                </div>
              </div>
            </div>

            <div className="available-shops-preview">
              <h3>{t("bookshop.available_now")}</h3>
              <div className="shops-quick-list">
                {availableShops.slice(0, 4).map(shop => (
                  <div key={shop.id} className="quick-shop-item">
                    <span className="shop-num">Shop {shop.shopNumber}</span>
                    <span className="shop-size">{shop.size} ft</span>
                    <span className="shop-rent">₹{shop.rent}/mo</span>
                  </div>
                ))}
              </div>
              <Link to="/shops" className="view-all-link">
                {t("bookshop.view_all_shops")} →
              </Link>
            </div>

            <div className="contact-direct">
              <h3>{t("bookshop.prefer_call")}</h3>
              <a href="tel:+919754265265" className="phone-link">
                📞 +91-9754265265
              </a>
              <p className="timing-note">{t("bookshop.call_timing")}</p>
            </div>
          </div>

          <div className="bookshop-form-section">
            <div className="form-card">
              <h2>{t("bookshop.form_title")}</h2>
              <p className="form-subtitle">{t("bookshop.form_subtitle")}</p>

              {submitted && (
                <div className="success-message">
                  ✅ {t("bookshop.success_message")}
                </div>
              )}

              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="fullName">
                    {t("bookshop.full_name")} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t("bookshop.full_name_placeholder")}
                    className={errors.fullName ? "error" : ""}
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">
                    {t("bookshop.mobile")} <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder={t("bookshop.mobile_placeholder")}
                    className={errors.mobile ? "error" : ""}
                  />
                  {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="address">{t("bookshop.address")}</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder={t("bookshop.address_placeholder")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="businessType">
                    {t("bookshop.business_type")} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder={t("bookshop.business_type_placeholder")}
                    className={errors.businessType ? "error" : ""}
                  />
                  {errors.businessType && <span className="error-text">{errors.businessType}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="shopPreference">{t("bookshop.shop_preference")}</label>
                    <select
                      id="shopPreference"
                      name="shopPreference"
                      value={formData.shopPreference}
                      onChange={handleChange}
                    >
                      <option value="any">{t("bookshop.any_available")}</option>
                      {availableShops.map(shop => (
                        <option key={shop.id} value={`Shop ${shop.shopNumber}`}>
                          Shop {shop.shopNumber} - {shop.size} ft (₹{shop.rent}/mo)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredSize">{t("bookshop.preferred_size")}</label>
                    <select
                      id="preferredSize"
                      name="preferredSize"
                      value={formData.preferredSize}
                      onChange={handleChange}
                    >
                      <option value="any">{t("bookshop.any_size")}</option>
                      <option value="15×12 ft">15×12 ft (180 sq ft)</option>
                      <option value="30×12 ft">30×12 ft (360 sq ft)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t("bookshop.additional_requirements")}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("bookshop.additional_requirements_placeholder")}
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  {t("bookshop.submit_inquiry")} 📩
                </button>

                <p className="form-note">
                  {t("bookshop.form_note")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
