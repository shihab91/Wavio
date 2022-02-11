import { Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useParams } from "react-router-dom";

const Pay = () => {
  const { appointmentId } = useParams();
  console.log(
    "🚀 ~ file: Pay.js ~ line 7 ~ Pay ~ appointmentId",
    appointmentId
  );

  return (
    <Container>
      <Toolbar />
      <Toolbar />
      <Typography
        variant="h4"
        sx={{ fontFamily: "var(--dosis-font)", color: "var(--color)" }}
      >
        {appointmentId}
      </Typography>
    </Container>
  );
};

export default Pay;