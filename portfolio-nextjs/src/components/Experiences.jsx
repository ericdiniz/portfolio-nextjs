"use client";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const Experiences = () => {
  const { t, i18n } = useTranslation("common");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n && i18n.isInitialized) setIsReady(true);
  }, [i18n && i18n.isInitialized]);

  if (!isReady) return null;

  const experiences = [
    {
      title: t("experience1_title"),
      period: t("experience1_period"),
      details: t("experience1_details", { returnObjects: true }) || [],
      positions: t("experience1_positions", { returnObjects: true }) || null,
    },
    {
      title: t("experience2_title"),
      period: t("experience2_period"),
      details: t("experience2_details", { returnObjects: true }) || [],
      positions: t("experience2_positions", { returnObjects: true }) || null,
    },
    {
      title: t("experience3_title"),
      period: t("experience3_period"),
      details: t("experience3_details", { returnObjects: true }) || [],
      positions: t("experience3_positions", { returnObjects: true }) || null,
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
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#fff" }}
                >
                  {exp.title}
                </Typography>
                {exp.positions ? (
                  (() => {
                    const posArray = Array.isArray(exp.positions)
                      ? exp.positions
                      : typeof exp.positions === "object"
                        ? Object.values(exp.positions)
                        : [];

                    // single position: combine role and company
                    if (posArray.length === 1) {
                      const pos = posArray[0];
                      const objHigh = Array.isArray(pos.highlights)
                        ? pos.highlights.filter((h) => typeof h === "object")
                        : [];
                      const strHigh = Array.isArray(pos.highlights)
                        ? pos.highlights.filter((h) => typeof h === "string")
                        : [];

                      return (
                        <Box mt={1}>
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{ color: "#fff" }}
                          >
                            {pos.role} | {exp.title}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: "#9e9e9e", mb: 1 }}
                          >
                            {pos.period}
                          </Typography>

                          {objHigh.length > 0 && (
                            <Box mt={1}>
                              {objHigh.map((h, idx) => (
                                <Box key={idx} sx={{ mb: 1 }}>
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight="bold"
                                    sx={{ color: "primary.main" }}
                                  >
                                    {h.label}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#e0e0e0" }}
                                  >
                                    {h.description}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          )}

                          {strHigh.length > 0 && (
                            <Box mt={2}>
                              {strHigh.map((s, sid) => (
                                <Typography
                                  key={sid}
                                  variant="subtitle2"
                                  fontWeight="bold"
                                  sx={{ color: "primary.main", mt: 1 }}
                                >
                                  {s}
                                </Typography>
                              ))}
                            </Box>
                          )}
                        </Box>
                      );
                    }

                    // multiple positions
                    return (
                      <Box mt={1}>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ color: "#fff" }}
                        >
                          {exp.title}
                        </Typography>

                        {posArray.map((pos, pidx) => (
                          <Box key={pidx} sx={{ mt: pidx === 0 ? 1 : 2 }}>
                            <Typography
                              variant="subtitle1"
                              fontWeight="bold"
                              sx={{ color: "#fff" }}
                            >
                              {pos.role}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ color: "#9e9e9e", mb: 1 }}
                            >
                              {pos.period}
                            </Typography>

                            {pos.highlights &&
                              Array.isArray(pos.highlights) &&
                              pos.highlights.length > 0 && (
                                <Box mt={1}>
                                  {pos.highlights
                                    .filter((h) => typeof h === "object")
                                    .map((h, idx) => (
                                      <Box key={idx} sx={{ mb: 1 }}>
                                        <Typography
                                          variant="subtitle2"
                                          fontWeight="bold"
                                          sx={{ color: "primary.main" }}
                                        >
                                          {h.label}
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          sx={{ color: "#e0e0e0" }}
                                        >
                                          {h.description}
                                        </Typography>
                                      </Box>
                                    ))}

                                  {pos.highlights
                                    .filter((h) => typeof h === "string")
                                    .map((s, sid) => (
                                      <Typography
                                        key={sid}
                                        variant="subtitle2"
                                        fontWeight="bold"
                                        sx={{ color: "primary.main", mt: 1 }}
                                      >
                                        {s}
                                      </Typography>
                                    ))}
                                </Box>
                              )}
                          </Box>
                        ))}

                        {Array.isArray(exp.details) &&
                          exp.details.length > 0 && (
                            <Box mt={2}>
                              {exp.details.map((detail, didx) => (
                                <Box key={didx} sx={{ mt: didx === 0 ? 0 : 2 }}>
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight="bold"
                                    sx={{ color: "#fff" }}
                                  >
                                    {detail.label}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{ color: "#e0e0e0" }}
                                  >
                                    {detail.description}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          )}
                      </Box>
                    );
                  })()
                ) : (
                  <>
                    <Typography variant="subtitle2" color="gray">
                      {exp.period}
                    </Typography>
                    {Array.isArray(exp.details) &&
                      exp.details.map((detail, idx) => (
                        <Box key={idx} mt={2}>
                          <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{ color: "#fff" }}
                          >
                            {detail.label}
                          </Typography>
                          <Typography variant="body2">
                            {detail.description}
                          </Typography>
                        </Box>
                      ))}
                  </>
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
