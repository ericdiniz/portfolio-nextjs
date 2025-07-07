"use client";

import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Garante que a tradução seja carregada no client
  }, []);

  const contacts = [
    {
      icon: <Email />,
      text: "eric.r.diniz@gmail.com",
      link: "mailto:eric.r.diniz@gmail.com",
    },
    {
      icon: <LinkedIn />,
      text: "linkedin.com/in/ericdiniz",
      link: "https://linkedin.com/in/ericdiniz",
    },
    {
      icon: <GitHub />,
      text: "github.com/ericdiniz",
      link: "https://github.com/ericdiniz",
    },
  ];

  if (!mounted) return null;

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {t("contact_title")}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {contacts.map((contact, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: "#1e1e1e",
                color: "#fff",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <CardContent>
                <IconButton
                  component={Link}
                  href={contact.link}
                  target="_blank"
                  sx={{
                    color: "#fff",
                    transition: "color 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      color: "#007bff",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  {contact.icon}
                </IconButton>
                <Typography variant="body1">
                  <Link
                    href={contact.link}
                    color="inherit"
                    target="_blank"
                    underline="hover"
                  >
                    {contact.text}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
