import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const experiences = [
  {
    title: "Estagiário QA Automação | Mova SEP SA",
    period: "janeiro de 2023 - fevereiro 2025",
    details: [
      {
        label: "Testes Automatizados",
        description:
          "Desenvolvimento de testes automatizados com Playwright e TypeScript, além da execução de testes via API, assegurando a qualidade e confiabilidade das aplicações.",
      },
      {
        label: "Documentação e Análise",
        description:
          "Elaboração de documentação de sistemas, programas e rotinas, auxiliando na identificação e análise de falhas durante o processo de teste de software, sob supervisão.",
      },
      {
        label: "Desenvolvimento Frontend",
        description:
          "Implementação de integrações no frontend com Vue.js, utilizando Axios, garantindo comunicação eficiente com APIs em arquiteturas baseadas em MVC e microsserviços.",
      },
      {
        label: "Experiência do Usuário",
        description:
          "Construção de interfaces sólidas, responsivas e intuitivas com Vuetify, proporcionando uma experiência consistente e de alta qualidade para o usuário.",
      },
      {
        label: "Testes Unitários",
        description:
          "Criação de testes unitários utilizando JEST no NuxtJS para garantir a estabilidade e confiabilidade do código.",
      },
    ],
  },
  {
    title: "Monitor em Engenharia de Software | PUC Minas",
    period: "outubro de 2023 - dezembro de 2024",
    details: [
      {
        label: "Programação Modular (out 2023 – dez 2023)",
        description:
          "Auxílio para alunos com dificuldades nas atividades e provas da disciplina.",
      },
      {
        label:
          "Fundamentos de Projeto e Análise de Algoritmos (fev 2024 – jun 2024)",
        description:
          "Auxílio para alunos com dificuldades nas atividades e provas da disciplina.",
      },
      {
        label: "Programação Modular (ago 2024 – dez 2024)",
        description:
          "Auxílio para alunos com dificuldades nas atividades e provas da disciplina.",
      },
    ],
  },
];

const Experiences = () => {
  return (
    <Box
      sx={{ backgroundColor: "#121212", color: "#fff", padding: "50px 20px" }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        Experiências
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {experiences.map((exp, index) => (
          <Grid key={index} item xs={12} md={12}>
            <Card
              sx={{ backgroundColor: "#1e1e1e", color: "#fff", padding: 2 }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {exp.title}
                </Typography>
                <Typography variant="subtitle2" color="gray">
                  {exp.period}
                </Typography>
                {exp.details.map((detail, idx) => (
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
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experiences;
