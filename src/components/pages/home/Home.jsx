import { Container, Typography, Button, Box, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh", // Ocupa todo el alto de la ventana
        display: "flex",
        alignItems: "center", // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
        border: "solid 2px",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Hola! soy Antonio Melino
          </Typography>
          <Typography variant="h4" gutterBottom>
            Desarrollador de Software
          </Typography>
          <Typography variant="body1" gutterBottom>
            Frontend / Backend
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Contactame!
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://res.cloudinary.com/dhwsxp2c8/image/upload/v1742259702/Foto_CV_-_Antonio_Melino_ixgpsa.jpg" // Reemplaza con la ruta de tu imagen
            alt="Antonio Melino"
            sx={{ width: "100%", height: "auto", borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
