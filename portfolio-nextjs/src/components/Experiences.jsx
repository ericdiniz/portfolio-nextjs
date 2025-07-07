"use client";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useTranslation } from "../hooks/useTranslation";

const Experiences = () => {
  const { t } = useTranslation("common");

  const experiences = [
    {
      title: t("experience1_title"),
      period: t("experience1_period"),
      details: t("experience1_details", { returnObjects: true }) || [],
    },
    {
      title: t("experience2_title"),
      period: t("experience2_period"),
      details: t("experience2_details", { returnObjects: true }) || [],
    },
    {
      title: t("experience3_title"),
      details: t("experience3_details", { returnObjects: true }) || [],
    },
  ];

  return (
    <Box
      id="experiencias"
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        padding: "50px 20px",
        mt: 4,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        {t("experiences_title")}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {experiences.map((exp, index) => (
          <Grid key={index} item xs={12} md={12}>
            <Card
              sx={{
                backgroundColor: "#1e1e1e",
                color: "#fff",
                padding: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {exp.title}
                </Typography>
                <Typography variant="subtitle2" color="gray">
                  {exp.period}
                </Typography>
                {(Array.isArray(exp.details) ? exp.details : []).map(
                  (detail, idx) => (
                    <Box key={idx} mt={2}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="primary"
                      >
                        {detail.label}
                      </Typography>
                      <Typography variant="body2">
                        {detail.description}
                      </Typography>
                    </Box>
                  )
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experiences;
