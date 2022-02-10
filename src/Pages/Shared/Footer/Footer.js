import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram, AiOutlineGithub } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <svg
        id="footer-wave"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1440 184"
      >
        <g>
          <path
            className="footer-bg-wave"
            d="M1285.4,81.2c-34,12.5-98.3,33.1-186.9,39.8c-230.8,17.6-274.8-85-472.8-71.3
c-182,12.6-219.4,104.5-345.3,65.2C237.9,101.6,177,70.7,91.6,81.2c-31.7,4-62.6,13-91.6,26.6V184h1440V0
C1392.2,33.7,1340.3,61,1285.4,81.2z"
          ></path>
        </g>
      </svg>
      <Box className="footerStyle">
        <Container>
          <Grid
            container
            spacing={4}
            sx={{ borderBottom: "1px solid #ffffff1a", pb: 5 }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <List>
                <Typography variant="h6" sx={{ textAlign: "left", ml: 2 }}>
                  <span className="bar">|</span>
                  Menu
                </Typography>
                <ListItem className="footer-links"> Home</ListItem>
                <ListItem className="footer-links"> Reviews</ListItem>
                <ListItem className="footer-links"> Contact Us</ListItem>
                <ListItem className="footer-links"> Products</ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" sx={{ textAlign: "left", ml: 2 }}>
                <span className="bar">|</span>
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", ml: 2, my: 2 }}
              >
                51st St, New York, NY 10019
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "left", ml: 2 }}>
                Call Us: 212.262.3200
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left", ml: 2, mt: 3 }}>
                <span className="bar">|</span>
                Social Media Links
              </Typography>
              <Box sx={{ ml: 2, mt: 3 }}>
                <a
                  target="blank"
                  href="https://www.facebook.com/mdshihab.shumon.3/"
                >
                  <RiFacebookFill className="footer-icons" />
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/shihabshumon9/"
                >
                  <AiFillInstagram className="footer-icons" />
                </a>
                <a target="blank" href="https://github.com/shihab91/">
                  <AiOutlineGithub className="footer-icons" />
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", ml: 2, mt: 3 }}
                >
                  {" "}
                  <span className="bar">|</span>
                  Subscribe to our Newsletter
                </Typography>
                <input
                  type="text"
                  className="subscribe"
                  placeholder="Subscribe "
                />
                <Button
                  variant="contained"
                  sx={{ background: "var(--button-bg)" }}
                  className="button"
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
          <p className="copyright-text">
            Copyright ©2022 Wavio. All rights reserved.
          </p>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
