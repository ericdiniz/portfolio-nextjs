"use client";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {
  FaGitAlt,
  FaJira,
  FaJs,
  FaMicrosoft,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { MdOutlineBugReport } from "react-icons/md";
import {
  SiCypress,
  SiExpress,
  SiJest,
  SiJunit5,
  SiMui,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostman,
  SiSpringboot,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { useTranslation } from "../hooks/useTranslation";
import PlaywrightIcon from "./icons/PlaywrightIcon";

const Technologies = () => {
  const { t } = useTranslation("common");

  const techCategories = {
    [t("tech_categories.frameworks")]: [
      { name: "tech.spring", icon: <SiSpringboot size={30} color="#6DB33F" /> },
      { name: "tech.node", icon: <FaNodeJs size={30} color="#3C873A" /> },
      { name: "tech.js", icon: <FaJs size={30} color="#F7DF1E" /> },
      { name: "tech.ts", icon: <SiTypescript size={30} color="#3178C6" /> },
      { name: "tech.react", icon: <FaReact size={30} color="#61DAFB" /> },
      { name: "tech.vue", icon: <FaVuejs size={30} color="#42b883" /> },
      { name: "tech.express", icon: <SiExpress size={30} color="#000000" /> },
      { name: "tech.next", icon: <SiNextdotjs size={30} color="#000000" /> },
      { name: "tech.nuxt", icon: <SiNuxtdotjs size={30} color="#00DC82" /> },
    ],
    [t("tech_categories.tools")]: [
      { name: "tech.mui", icon: <SiMui size={30} color="#007FFF" /> },
      { name: "tech.git", icon: <FaGitAlt size={30} color="#F05032" /> },
    ],
    [t("tech_categories.testing")]: [
      { name: "tech.jest", icon: <SiJest size={30} color="#99425b" /> },
      { name: "tech.junit", icon: <SiJunit5 size={30} color="#25A162" /> },
      { name: "tech.cypress", icon: <SiCypress size={30} color="#4B4B4B" /> },
      { name: "tech.postman", icon: <SiPostman size={30} color="#FF6C37" /> },
      {
        name: "tech.playwright",
        icon: <PlaywrightIcon size={30} color="#F44F26" />,
      },
      {
        name: "tech.orange",
        icon: (
          <img
            src="/images/orangetesting.png"
            alt="Orange Testing"
            width={30}
            height={30}
            style={{ objectFit: "contain" }}
          />
        ),
      },
      {
        name: "tech.manual",
        icon: <MdOutlineBugReport size={30} color="#E53935" />,
      },
    ],
    [t("tech_categories.management")]: [
      { name: "tech.jira", icon: <FaJira size={30} color="#0052CC" /> },
    ],
    [t("tech_categories.cicd")]: [
      { name: "tech.vercel", icon: <SiVercel size={30} color="#000000" /> },
      { name: "tech.office", icon: <FaMicrosoft size={30} color="#F25022" /> },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        textAlign: "center",
        my: 4,
        color: "inherit",
        padding: "50px 20px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {t("technologies")}
      </Typography>
      {Object.entries(techCategories).map(([category, techs]) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {category}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {techs.map(({ name, icon }) => (
              <Grid item key={name}>
                <Card
                  sx={{
                    width: 120,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    {icon}
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {t(name)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Technologies;
