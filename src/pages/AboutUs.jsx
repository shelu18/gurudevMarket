import React from "react";
import { useTranslation } from "react-i18next";
import marketRealImg from "../assets/marketimg/img1.jpeg";
import vishnuImg from "../assets/owners/vishnu.jpg";
import devendraImg from "../assets/owners/devendra.jpg";
import shailendraImg from "../assets/owners/shailendra.jpg";
import OwnerCard from "../components/OwnerCard/OwnerCard";
import "../styles/AboutUs.css";

const owners = [
  {
    nameKey: "owner3_name",
    title: "Founder",
    descKey: "owner3_desc",
    image: vishnuImg,
  },
  {
    nameKey: "owner1_name",
    title: "Co-Founder",
    descKey: "owner1_desc",
    image: devendraImg,
  },
  {
    nameKey: "owner2_name",
    title: "Manager",
    descKey: "owner2_desc",
    image: shailendraImg,
  },
];

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="aboutus-container">
      <div className="aboutus-hero">
        <img src={marketRealImg} alt="Gurudev Market" className="aboutus-banner" />
        <div className="hero-overlay">
          <h1>{t("aboutUs.title")}</h1>
        </div>
      </div>
      
      <div className="aboutus-content">
        <p className="aboutus-desc">
          {t("aboutUs.description")}
        </p>
        
        <div className="vision-mission-cards">
          <div className="vm-card">
            <div className="vm-icon">🎯</div>
            <h3>{t("aboutUs.vision")}</h3>
            <p>{t("aboutUs.vision_text")}</p>
          </div>
          <div className="vm-card">
            <div className="vm-icon">🚀</div>
            <h3>{t("aboutUs.mission")}</h3>
            <p>{t("aboutUs.mission_text")}</p>
          </div>
        </div>
      </div>
      
      <section className="owners-section">
        <h2 className="owners-title">{t("aboutUs.owners_title")}</h2>
        <div className="owners-grid">
          {owners.map((owner, idx) => (
            <OwnerCard
              key={owner.nameKey}
              image={owner.image}
              name={t(`aboutUs.${owner.nameKey}`)}
              title={owner.title}
              desc={t(`aboutUs.${owner.descKey}`)}
              left={idx % 2 === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
