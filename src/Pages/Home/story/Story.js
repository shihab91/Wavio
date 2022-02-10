import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./story.css";
import img1 from "../../../images/microscope.png";
import img2 from "../../../images/flask.png";
import img3 from "../../../images/glass.png";
import img4 from "../../../images/certification.png";
import { useHistory } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "LABORATORY CONTROL",
    image: img1,
  },
  {
    id: 2,
    title: "GREAT COMPOSITION",
    image: img2,
  },
  {
    id: 3,
    title: "NANO FILTRATION LEVEL",
    image: img3,
  },
  {
    id: 4,
    title: "CERTIFICATES OF QUALITY",
    image: img4,
  },
];
const Story = () => {
  const history = useHistory();
  return (
    <Container>
      <div className="story-description-container">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontFamily: "var(--nunito-font)", fontWeight: 700 }}
        >
          <span style={{ color: "var(--color)" }}>OUR</span> STORY
        </Typography>
        <img src="https://i.ibb.co/hLsCxZK/Wave.png" alt="" />
        <p className="description">
          Our company was founded in 2008. Water Brand bottle is great for
          drinking, cooking, activities, and even for children. The product is
          certified in 50 countries.
        </p>
      </div>
      <Grid container spacing={1} sx={{ mt: 12 }}>
        {data.map((item) => (
          <>
            <Grid
              key={item.id}
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ mt: { xs: 6, md: 0 } }}
            >
              <Paper className="story-card">
                <img src={item.image} alt="" />
              </Paper>
              <h3 className="story-title">{item.title}</h3>
            </Grid>
          </>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{
          backgroundImage: "var(--button-bg)",
          borderRadius: "25px",
          p: "8px 40px",
          mt: 8,
          textTransform: "none",
          fontSize: "20px",
          fontWeight: 600,
        }}
        onClick={() => history.push("/explore")}
        className="button"
      >
        Our Products
      </Button>
    </Container>
  );
};

export default Story;
