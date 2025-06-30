"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { label: "SOBRE MIM", id: "sobre-mim" },
    { label: "EXPERIÊNCIAS", id: "experiencias" },
    { label: "TECNOLOGIAS", id: "tecnologias" },
    { label: "CONTATO", id: "contato" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgb(50, 50, 50)",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Texto "Meu Portfólio" some em telas menores que md */}
        <Typography
          variant="h6"
          sx={{ color: "white", display: { xs: "none", md: "block" } }}
        >
          Meu Portfólio
        </Typography>

        {/* Botões responsivos */}
        <Box>
          {navItems.map((item) => (
            <Link key={item.id} href={`/#${item.id}`} passHref>
              <Button
                sx={{
                  color: "white",
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, // Ajusta o tamanho do texto nos botões
                  padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" }, // Ajusta o padding
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
