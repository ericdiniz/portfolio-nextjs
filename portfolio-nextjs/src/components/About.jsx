import { Avatar, Box, Grid, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      sx={{ backgroundColor: "#121212", color: "#fff", padding: "50px 20px" }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Texto - Alinhado à Esquerda */}
        <Grid xs={12} md={7} item sx={{ textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Sobre Mim
          </Typography>
          <Typography variant="body1" paragraph>
            Sou Eric Rodrigues Diniz, tenho 24 anos e curso o 6º período de
            Engenharia de Software na PUC Minas (Campus Lourdes), nesse semestre
            estou aprendendo sobre medição e experimentação de software,
            engenharia econômica para software e gerência de configuração e
            evolução de software.
          </Typography>
          <Typography variant="body1" paragraph>
            Sou um profissional apaixonado por Qualidade de Software, Automação
            de Testes e Desenvolvimento Full Stack. Minha expertise está na
            criação de soluções eficientes e escaláveis, garantindo código
            limpo, bem estruturado e testável.
          </Typography>
          <Typography variant="body1" paragraph>
            Tenho forte atuação em Backend (Node.js com Express e Spring Boot) e
            Frontend (Next.js e Nuxt.js), aplicando os princípios do SOLID e
            Clean Code para construir sistemas robustos e de fácil manutenção.
            Além disso, tenho experiência em ambiente de trabalho como QA
            Automação e QA Manual, atuando por 2 anos com Playwright e
            TypeScript para testes de regressão via frontend e API. Também
            realizei testes de integração utilizando Axios e TypeScript.
            Contribuí para a construção de uma plataforma de testes na empresa
            MOVA SEP SA, utilizando Nuxt.js, Pinia e Axios no frontend, enquanto
            o backend foi desenvolvido em PHP com Hyperf.
          </Typography>
        </Grid>

        {/* Avatar - Centralizado */}
        <Grid
          xs={12}
          md={5}
          item
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="Minha Foto"
            src="/images/foto-perfil2.jpeg"
            sx={{ width: 280, height: 280, border: "6px solid #2c2c2c" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
