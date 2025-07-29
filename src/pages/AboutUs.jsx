import React from "react";
import { useTranslation } from "react-i18next";
import marketBanner from "../assets/market_banner.png";
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
      <img src={marketBanner} alt="Gurudev Market" className="aboutus-banner" />
      <h1>{t("aboutUs.title")}</h1>
      <p className="aboutus-desc">
        {t("aboutUs.description")}<br /><br />
        <strong>{t("aboutUs.vision")}</strong>: {t("aboutUs.vision_text")}<br />
        <strong>{t("aboutUs.mission")}</strong>: {t("aboutUs.mission_text")}<br /><br />
        {t("aboutUs.owners_title")}
      </p>
      <section className="owners-section">
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
      </section>
    </div>
  );
}
