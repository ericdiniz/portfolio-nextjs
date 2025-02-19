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
import PlaywrightIcon from "./icons/PlaywrightIcon";

// Mapeamento de tecnologias com ícones
const techCategories = {
  "Linguagens e Frameworks": [
    { name: "Java (Spring Boot)", icon: <SiSpringboot size={30} /> },
    { name: "Node.js", icon: <FaNodeJs size={30} /> },
    { name: "JavaScript (JS)", icon: <FaJs size={30} /> },
    { name: "TypeScript (TS)", icon: <SiTypescript size={30} /> },
    { name: "React.JS", icon: <FaReact size={30} /> },
    { name: "Vue.js", icon: <FaVuejs size={30} /> },
    { name: "Express", icon: <SiExpress size={30} /> },
    { name: "NextJS", icon: <SiNextdotjs size={30} /> },
    { name: "NuxtJS", icon: <SiNuxtdotjs size={30} /> },
  ],
  "Bibliotecas e Ferramentas": [
    { name: "Material-UI (MUI)", icon: <SiMui size={30} /> },
    { name: "Git", icon: <FaGitAlt size={30} /> },
  ],
  "Testes e Qualidade de Software": [
    { name: "Jest", icon: <SiJest size={30} /> },
    { name: "JUnit", icon: <SiJunit5 size={30} /> },
    { name: "Cypress", icon: <SiCypress size={30} /> },
    { name: "Postman", icon: <SiPostman size={30} /> },
    { name: "Playwright", icon: <PlaywrightIcon size={30} color="#ffffff" /> },
    { name: "Testes Manuais", icon: <MdOutlineBugReport size={30} /> },
  ],
  "Metodologias e Gerenciamento": [
    { name: "Jira (Scrum e Kanban)", icon: <FaJira size={30} /> },
  ],
  "CI/CD e Outras Ferramentas": [
    { name: "CI/CD (Vercel)", icon: <SiVercel size={30} /> },
    { name: "Microsoft Office", icon: <FaMicrosoft size={30} /> },
  ],
};

const Technologies = () => {
  return (
    <Box sx={{ textAlign: "center", my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Tecnologias
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
                      {name}
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
