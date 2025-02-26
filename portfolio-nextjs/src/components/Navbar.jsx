"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const toggleDrawer = (open) => {
    setMobileOpen(open);
  };

  const navItems = [
    { label: "SOBRE MIM", id: "sobre-mim" },
    { label: "EXPERIÊNCIAS", id: "experiencias" },
    { label: "TECNOLOGIAS", id: "tecnologias" },
    { label: "CONTATO", id: "contato" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "rgb(50, 50, 50)", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            Meu Portfólio
          </Typography>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Link key={item.id} href={`/#${item.id}`} passHref>
                <Button sx={{ color: "white" }}>{item.label}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": { backgroundColor: "black" },
        }}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileOpen(false);
                }}
              >
                <ListItemText primary={item.label} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
