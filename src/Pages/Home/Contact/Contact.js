import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Contact.css";
const Contact = () => {
  const contactStyle = {
    fontFamily: "var(--dosis-font)",
    fontWeight: 600,
  };

  return (
    <Container sx={{ mb: 20 }}>
      <Typography variant="h3" style={contactStyle} sx={{ mt: 25, mb: 6 }}>
        CONTACT <span style={{ color: "var(--color)" }}>INFORMATION</span>
      </Typography>
      <Box
        sx={{
          width: { xs: "90%", sm: "85%", md: "80%" },
          mx: "auto",
          my: 4,
          borderRadius: 1,
        }}
        className="contact-form"
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", pt: 8 }}
          style={contactStyle}
        >
          Send us a message
        </Typography>
        <form action="" className="form">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <textarea
            name=""
            id=""
            cols="22"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <Button
            variant="contained"
            sx={{
              backgroundImage: "var(--button-bg)",
              borderRadius: "25px",
              p: "8px 40px",
              mt: 3,
              mb: 5,
              fontSize: "17px",
              fontWeight: 600,
            }}
            className="button"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
