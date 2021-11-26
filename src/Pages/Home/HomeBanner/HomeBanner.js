import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";

const HomeBanner = () => {
  const bannerFontStyle = {
    fontFamily: "var(--dosis-font)",
    fontWeight: "600",
    textAlign: "left",
  };
  const readMore = {
    backgroundColor: "white",
  };
  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{}}>
            <Typography style={bannerFontStyle} variant="h2" gutterBottom>
              PURE WATER
            </Typography>
            <Typography
              style={bannerFontStyle}
              variant="h2"
              gutterBottom
              sx={{ color: "var(--color)" }}
            >
              DELIVERY SERVICE
            </Typography>
          </Box>
          <Typography
            sx={{ textAlign: "left", mt: 2 }}
            variant="h6"
            gutterBottom
          >
            <Box
              sx={{
                display: "inline",
                color: "var(--color)",
                fontWeight: "bold",
                width: "5px  ",
              }}
            >
              |{" "}
            </Box>{" "}
            We now deliver different types of bottled water. To drink the best
            water please come to us and give us an order and take safe and sound
            water for you.
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundImage: "var(--button-bg)",
                borderRadius: "30px",
                p: "10px 35px",
                mt: 3,
                fontSize: "17px",
                fontWeight: 600,
                fontFamily: "",
              }}
            >
              Order Now
            </Button>
            <Button
              variant="contained"
              style={readMore}
              sx={{
                color: "var(--color)",
                borderRadius: "30px",
                p: "10px 35px",
                mt: 3,
                fontSize: "17px",
                fontWeight: 600,
                ml: { xs: 0, sm: 5 },
              }}
            >
              Read More
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            mx: "auto",
            pt: { xs: 0, md: "auto" },
            display: { xs: "none", md: "initial" },
          }}
          md={5}
        >
          <img
            style={{ width: "70%" }}
            src="https://previews.dropbox.com/p/thumb/ABXVG8BGuDIQR3Fcl94Z3ES-S8sEJXRHjhWbDEDa2Qwm1ugVl3GC9jg4ePdeW7t2MNuz7plP8mvPLS8jfOVmiXW-ZudrG505-XBhafaeINHBUG8ZxsXt5Jb-9kBIQZsUbA4voHZwWkhzE4il8oJFoYtG3-9WeVdi6pWWtC8a3N2mGtAz8kjLhdxJ7Gu7OP4Uf46J4-UAtufqTNJfhFh-X8KjzSkUp2kso0oosYRsUYLcuUj-qBENUV4FsBPcm79NkuZZddsA5pZ7QYxvgo8eIhiNSjOKOz49btyQ6tFMnzNVfCrA1pSol4Ug_REeziqo37IYdXarl9W0WZfCRIqmAyo3qb2iHykMuH6wAVyjE9nc9w/p.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeBanner;
