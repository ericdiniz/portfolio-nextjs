"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function Navbar() {
  const { t, i18n } = useTranslation("common");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) setIsReady(true);
  }, [i18n.isInitialized]);

  if (!isReady) return null; // impede hidratação incorreta

  const navItems = [
    { label: t("about"), id: "sobre-mim" },
    { label: t("experiences"), id: "experiencias" },
    { label: t("technologies"), id: "tecnologias" },
    { label: t("contact"), id: "contato" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgb(50, 50, 50)",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ color: "white", display: { xs: "none", md: "block" } }}
        >
          {t("portfolio")}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {navItems.map((item) => (
            <Link key={item.id} href={`/#${item.id}`} passHref>
              <Button
                sx={{
                  color: "white",
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                  padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
          <Button
            onClick={toggleLanguage}
            sx={{
              color: "white",
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
              textTransform: "none",
            }}
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
