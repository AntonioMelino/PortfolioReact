import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const pages = ["INICIO", "SOBRE MI", "CONOCIMIENTOS", "PROYECTOS", "CONTACTO"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Detecta pantallas pequeñas

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* Navbar para pantallas pequeñas (horizontal y arriba) */}
      {isSmallScreen && (
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            {/* Texto "ANTONIO MELINO" en lugar del logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              ANTONIO MELINO
            </Typography>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      )}

      {/* Navbar para pantallas medianas y grandes (vertical y a la izquierda) */}
      {!isSmallScreen && (
        <Box
          sx={{
            width: "200px",
            height: "100vh",
            backgroundColor: "primary.main",
            position: "fixed",
            left: 0,
            top: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 2,
          }}
        >
          {/* Texto "ANTONIO MELINO" con salto de línea */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              fontSize: "2.5rem",
              color: "white",
              textDecoration: "none",
              mb: 2,
              textAlign: "center", // Centrar el texto
            }}
          >
            ANTONIO
            <br />
            MELINO
          </Typography>

          {/* Botones de navegación */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  color: "white",
                  width: "100%",
                  justifyContent: "center",
                  pl: 3,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Iconos de GitHub, LinkedIn y WhatsApp */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "auto", // Empuja los iconos hacia abajo
              mb: 4, // Margen inferior
              gap: 1, // Espaciado entre iconos
              color: "white",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="GitHub"
              href="https://github.com/AntonioMelino"
              target="_blank"
              sx={{ fontSize: "60px" }} // Tamaño personalizado
            >
              <GitHubIcon fontSize="inherit" />{" "}
              {/* Hereda el tamaño del IconButton */}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/antonio-melino-82a885213/"
              target="_blank"
              sx={{ fontSize: "60px" }} // Tamaño personalizado
            >
              <LinkedInIcon fontSize="inherit" />{" "}
              {/* Hereda el tamaño del IconButton */}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="WhatsApp"
              href="https://wa.me/tunumero"
              target="_blank"
              sx={{ fontSize: "60px" }} // Tamaño personalizado
            >
              <WhatsAppIcon fontSize="inherit" />{" "}
              {/* Hereda el tamaño del IconButton */}
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Navbar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";

// const pages = ["INICIO", "SOBRE MI", "CONOCIMIENTOS", "PROYECTOS", "CONTACTO"];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 25,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               fontSize: "2.0rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             ANTONIO MELINO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography sx={{ textAlign: "center" }}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             ANTONIO MELINO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, mx: 3, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;
