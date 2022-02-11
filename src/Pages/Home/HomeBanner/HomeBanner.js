import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
    <Container sx={{ py: { md: 9 } }}>
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
            sx={{
              fontFamily: "var(--nunito-font-font)",
              textAlign: "left",
              mt: 2,
            }}
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
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexDirection: { xs: "column", sm: "row" },
              mt: { xs: 4, sm: 0 },
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundImage: "var(--button-bg)",
                borderRadius: "30px",
                p: "10px 35px",
                mt: 3,
                fontSize: "17px",
                fontWeight: 600,
              }}
              className="button"
            >
              <Link to="/explore" style={{ color: "#fff" }}>
                Order Now
              </Link>
            </Button>
            <Button
              style={readMore}
              sx={{
                color: "var(--color)",
                borderRadius: "30px",
                p: "10px 35px",
                mt: { xs: 0, sm: 3 },
                fontSize: "17px",
                fontWeight: 600,
              }}
              className="button"
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
            src="https://i.ibb.co/mHtBR9L/netclipart-1-516x1024.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeBanner;
