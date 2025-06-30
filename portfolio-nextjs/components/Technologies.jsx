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

const techCategories = {
  "Linguagens e Frameworks": [
    {
      name: "Java (Spring Boot)",
      icon: <SiSpringboot size={30} color="#6DB33F" />,
    },
    { name: "Node.js", icon: <FaNodeJs size={30} color="#43853d" /> },
    { name: "JavaScript (JS)", icon: <FaJs size={30} color="#f7df1e" /> },
    {
      name: "TypeScript (TS)",
      icon: <SiTypescript size={30} color="#3178c6" />,
    },
    { name: "React.JS", icon: <FaReact size={30} color="#61DAFB" /> },
    { name: "Vue.js", icon: <FaVuejs size={30} color="#42b883" /> },
    { name: "Express", icon: <SiExpress size={30} color="#000000" /> },
    { name: "NextJS", icon: <SiNextdotjs size={30} color="#000000" /> },
    { name: "NuxtJS", icon: <SiNuxtdotjs size={30} color="#00C58E" /> },
  ],
  "Bibliotecas e Ferramentas": [
    { name: "Material-UI (MUI)", icon: <SiMui size={30} color="#007FFF" /> },
    { name: "Git", icon: <FaGitAlt size={30} color="#f34f29" /> },
  ],
  "Testes e Qualidade de Software": [
    { name: "Jest", icon: <SiJest size={30} color="#99425b" /> },
    { name: "JUnit", icon: <SiJunit5 size={30} color="#25A162" /> },
    { name: "Cypress", icon: <SiCypress size={30} color="#000000" /> },
    { name: "Postman", icon: <SiPostman size={30} color="#FF6C37" /> },
    { name: "Playwright", icon: <PlaywrightIcon size={30} color="#000000" /> },
    {
      name: "Orange Testing",
      icon: (
        <img
          src="/images/orangetesting.png"
          alt="Orange Testing"
          style={{ width: 30, height: 30, borderRadius: "50%" }}
        />
      ),
    },
    {
      name: "Testes Manuais",
      icon: <MdOutlineBugReport size={30} color="#000000" />,
    },
  ],
  "Metodologias e Gerenciamento": [
    {
      name: "Jira (Scrum e Kanban)",
      icon: <FaJira size={30} color="#0052cc" />,
    },
  ],
  "CI/CD e Outras Ferramentas": [
    { name: "CI/CD (Vercel)", icon: <SiVercel size={30} color="#000000" /> },
    {
      name: "Microsoft Office",
      icon: <FaMicrosoft size={30} color="#f25022" />,
    },
  ],
};

const Technologies = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        textAlign: "center",
        my: 4,
        color: "#fff",
        pt: "20px",
        pb: "20px",
        px: "20px",
      }}
    >
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
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    {icon}
                    <Typography variant="body2" sx={{ mt: 1, color: "#000" }}>
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
