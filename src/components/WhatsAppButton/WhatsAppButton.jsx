import React from "react";
import { useTranslation } from "react-i18next";
import "./WhatsAppButton.css";

export default function WhatsAppButton({ shopNumber = null }) {
  const { t } = useTranslation();
  const phoneNumber = "919754265265"; // WhatsApp format: country code + number (no + or -)
  
  const getMessage = () => {
    if (shopNumber) {
      return `Hello! I'm interested in Shop #${shopNumber} at Gurudev Market. Can you provide more details?`;
    }
    return `Hello! I would like to know more about the shops available at Gurudev Market.`;
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(getMessage())}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
      title={t("whatsapp.chat_with_us") || "Chat with us on WhatsApp"}
    >
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.252 1.410 1.409-5.246-0.292-0.508c-1.224-2.163-1.87-4.589-1.87-7.070 0-7.589 6.179-13.768 13.768-13.768s13.768 6.179 13.768 13.768-6.179 13.768-13.768 13.768zM21.355 18.697c-0.364-0.182-2.153-1.062-2.486-1.182s-0.576-0.182-0.819 0.182c-0.243 0.364-0.941 1.182-1.153 1.425s-0.425 0.273-0.789 0.091c-0.364-0.182-1.536-0.566-2.925-1.804-1.081-0.964-1.811-2.153-2.023-2.517s-0.022-0.559 0.159-0.74c0.164-0.164 0.364-0.425 0.546-0.638s0.243-0.364 0.364-0.607 0.061-0.455-0.030-0.638c-0.091-0.182-0.819-1.972-1.122-2.699-0.295-0.708-0.595-0.612-0.819-0.624-0.212-0.011-0.455-0.013-0.698-0.013s-0.638 0.091-0.972 0.455c-0.334 0.364-1.274 1.244-1.274 3.034s1.305 3.519 1.486 3.761c0.182 0.243 2.567 3.91 6.218 5.485 0.869 0.375 1.547 0.599 2.075 0.767 0.873 0.277 1.667 0.238 2.295 0.144 0.7-0.104 2.153-0.88 2.456-1.729s0.303-1.577 0.212-1.729c-0.091-0.152-0.334-0.243-0.698-0.425z"/>
      </svg>
    </a>
  );
}
