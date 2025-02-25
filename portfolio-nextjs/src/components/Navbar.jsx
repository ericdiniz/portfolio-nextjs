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
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (id) => {
    router.push(`#${id}`);
  };

  const toggleDrawer = (open) => () => {
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
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Meu Portfólio
          </Typography>

          {/* Ícone do Menu para Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer para Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Melhora o desempenho em dispositivos móveis
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
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
