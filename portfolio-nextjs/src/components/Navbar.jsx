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

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Link key={item.id} href={`/#${item.id}`} passHref>
                <Button>{item.label}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                <Link href={`/#${item.id}`} passHref>
                  <ListItemText primary={item.label} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
