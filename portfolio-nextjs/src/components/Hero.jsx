"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <section
      style={{
        paddingTop: "80px",
        paddingBottom: "20px",
        color: "#fff",
        background: "#000",
        textAlign: "center",
      }}
    >
      <h3>{t("hero_text")}</h3>
    </section>
  );
}
