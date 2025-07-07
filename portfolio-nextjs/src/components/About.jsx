"use client";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "../hooks/useTranslation";

const AboutMe = () => {
  const { t } = useTranslation("common");

  return (
    <Box
      sx={{ backgroundColor: "#121212", color: "#fff", padding: "50px 20px" }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Texto - Alinhado à Esquerda */}
        <Grid xs={12} md={7} item sx={{ textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {t("about")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about_paragraph1")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about_paragraph2")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about_paragraph3")}
          </Typography>
        </Grid>

        {/* Avatar - Centralizado */}
        <Grid
          xs={12}
          md={5}
          item
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="Minha Foto"
            src="/images/foto-perfil2.jpeg"
            sx={{ width: 280, height: 280, border: "6px solid #2c2c2c" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
